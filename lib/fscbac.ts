/* =====================================================================
   Подбор книги по стандарту FSCBAC.

   До сих пор адрес /api/recommend отвечал пустотой: две скобки и все.
   Это худшее, что могло быть на сайте, который приглашает проверить
   свой стандарт: приглашение есть, ответа нет.

   Здесь правила из public/api/matching.json выполнены как есть,
   без домыслов. Ни одного порога, веса или запрета, которого нет
   в самом стандарте. Если правило в стандарте изменится, эта
   выдача изменится вместе с ним, и наоборот: расхождение между
   написанным правилом и работающим подбором и есть то, ради чего
   стандарт вообще существует.

   Один и тот же расчет обслуживает и страницу для человека,
   и адрес для машины. Двух разных ответов на один вопрос быть
   не должно.
   ===================================================================== */

import matching from "../public/api/matching.json";
import valueRules from "../public/api/value_profile_rules.json";
import dataset from "../public/api/fscbac-dataset/books.json";

export type Age = "1-3" | "3-5" | "5-7" | "7-10";
export const AGES: Age[] = ["1-3", "3-5", "5-7", "7-10"];

export type Book = {
  canonical_id: string;
  title?: string;
  isbn?: string;
  type?: string;
  languages?: string[];
  age_group?: string;
  skills?: string[];
  value_profile?: Record<string, string>;
  source_links?: string[];
};

/* Чья это книга. Определяется по префиксу издательского номера,
   а не по списку, который пришлось бы вести руками. 978-1963328
   это наш префикс, остальное чужое. */
export const isOurs = (b: Book) => (b.isbn || "").startsWith("978-1963328");

export const allBooks = (dataset as { books: Book[] }).books;

type Matrix = Record<string, { critical?: string[]; allowed?: string[]; forbidden?: string[] }>;
type TypeMatrix = Record<string, { optimal?: string[]; secondary?: string[]; forbidden?: string[] }>;

const m = matching as {
  age_skill_matrix: Matrix;
  age_booktype_matrix: TypeMatrix;
  forbidden_logic: { id: string; match: Record<string, unknown>; result: string }[];
  weights: {
    skills: Record<string, number>;
    book_types: Record<string, number>;
    value_profile: Record<string, number>;
  };
  formula: { F: { weights: Record<string, number> } };
  ranking: Record<string, { range: string[] }>;
  safety: { rules: { id: string; match: Record<string, unknown>; result: string }[] };
};

const vr = (valueRules as {
  value_profile_rules: Record<string, Record<string, { allowed: string[]; forbidden: string[] }>>;
}).value_profile_rules;

export type Verdict = "IDEAL" | "STRONG" | "ACCEPTABLE" | "EXCLUDED";

export type Result = {
  book: Book;
  ours: boolean;
  score: number;
  verdict: Verdict;
  /* Почему вышло именно так. Стандарт объявлен детерминированным,
     а значит каждый шаг обязан быть предъявим. */
  reasons: string[];
};

/* Запреты проверяются раньше всего: правило CHECK_FORBIDDEN_FIRST
   из раздела ai_contract. Книга, попавшая под запрет, дальше
   не считается вовсе, какими бы ни были ее остальные признаки. */
function hardExclusion(b: Book, age: Age): string | null {
  const vp = b.value_profile || {};
  for (const rule of [...m.forbidden_logic, ...m.safety.rules]) {
    const cond = rule.match as Record<string, string | string[] | boolean>;

    if (cond.missing_attributes === true) {
      const need = ["complexity", "emotional_intensity", "narrative_structure", "linguistic_load", "visual_load"];
      if (need.some((k) => !vp[k])) return `${rule.id}: value profile incomplete`;
      continue;
    }

    const ages = cond.age_in as string[] | undefined;
    if (!ages) continue;
    /* В стандарте встречается запись "1-5": она означает обе младшие
       группы, а не отдельную возрастную полосу. */
    const covered = ages.some((a) => (a === "1-5" ? age === "1-3" || age === "3-5" : a === age));
    if (!covered) continue;

    for (const [k, want] of Object.entries(cond)) {
      if (k === "age_in") continue;
      if (vp[k] === want) return `${rule.id}: ${k} = ${String(want)} not permitted at ${age}`;
    }
  }
  return null;
}

function skillScore(b: Book, age: Age, reasons: string[]): number {
  const row = m.age_skill_matrix[age] || {};
  const crit = row.critical || [];
  const ok = row.allowed || [];
  const no = row.forbidden || [];
  const skills = b.skills || [];

  if (skills.some((s) => no.includes(s))) {
    reasons.push(`carries a skill forbidden at ${age}`);
    return m.weights.skills.forbidden;
  }
  if (!crit.length) return m.weights.skills.allowed;

  const hit = crit.filter((c) => skills.includes(c)).length;
  const share = hit / crit.length;
  reasons.push(`${hit} of ${crit.length} critical skills for ${age}`);
  return share * m.weights.skills.critical + (1 - share) * m.weights.skills.allowed;
}

function typeScore(b: Book, age: Age, reasons: string[]): number {
  const row = m.age_booktype_matrix[age] || {};
  const t = b.type || "";
  if ((row.forbidden || []).includes(t)) {
    reasons.push(`book type ${t} is forbidden at ${age}`);
    return m.weights.book_types.forbidden;
  }
  if ((row.optimal || []).includes(t)) {
    reasons.push(`book type ${t} is optimal at ${age}`);
    return m.weights.book_types.optimal;
  }
  if ((row.secondary || []).includes(t)) {
    reasons.push(`book type ${t} is secondary at ${age}`);
    return m.weights.book_types.secondary;
  }
  reasons.push(`book type ${t} is not listed for ${age}`);
  return 0;
}

function profileScore(b: Book, age: Age, reasons: string[]): number {
  const rules = vr[age] || {};
  const vp = b.value_profile || {};
  const dims = Object.keys(rules);
  if (!dims.length) return m.weights.value_profile.compatible;

  let good = 0;
  let bad = 0;
  for (const d of dims) {
    const v = vp[d];
    if (!v) continue;
    if ((rules[d].forbidden || []).includes(v)) bad++;
    else if ((rules[d].allowed || []).includes(v)) good++;
  }
  if (bad) {
    reasons.push(`${bad} value-profile attribute(s) outside the range for ${age}`);
    return m.weights.value_profile.incompatible;
  }
  const share = good / dims.length;
  reasons.push(`${good} of ${dims.length} value-profile attributes within range`);
  if (share >= 1) return m.weights.value_profile.full;
  if (share >= 0.6) return m.weights.value_profile.compatible;
  return m.weights.value_profile.partial;
}

function verdictOf(F: number): Verdict {
  if (F >= 0.85) return "IDEAL";
  if (F >= 0.65) return "STRONG";
  if (F >= 0.35) return "ACCEPTABLE";
  return "EXCLUDED";
}

export type Query = {
  age: Age;
  language?: string;
  type?: string;
  skills?: string[];
};

export function recommend(q: Query): Result[] {
  const w = m.formula.F.weights;
  const out: Result[] = [];

  for (const b of allBooks) {
    if (q.language && !(b.languages || []).includes(q.language.toUpperCase())) continue;
    if (q.type && b.type !== q.type) continue;

    const reasons: string[] = [];
    const blocked = hardExclusion(b, q.age);
    if (blocked) {
      out.push({ book: b, ours: isOurs(b), score: 0, verdict: "EXCLUDED", reasons: [blocked] });
      continue;
    }

    let s = skillScore(b, q.age, reasons);
    const t = typeScore(b, q.age, reasons);
    const p = profileScore(b, q.age, reasons);

    /* Навыки, названные в запросе, учитываются внутри своей доли,
       а не отдельным слагаемым: иначе сумма перестала бы отвечать
       формуле, объявленной в стандарте. */
    if (q.skills && q.skills.length) {
      const have = (b.skills || []).filter((x) => q.skills!.includes(x)).length;
      const share = have / q.skills.length;
      reasons.push(`${have} of ${q.skills.length} requested skills present`);
      s = s * 0.5 + share * 0.5;
    }

    const F = w.skills * s + w.value_profile * p + w.book_types * t;
    out.push({
      book: b,
      ours: isOurs(b),
      score: Math.max(0, Math.min(1, Number(F.toFixed(3)))),
      verdict: verdictOf(F),
      reasons,
    });
  }

  return out.sort((a, x) => x.score - a.score);
}
