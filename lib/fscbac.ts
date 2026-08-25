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
import skillsRef from "../public/api/skills.json";

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

/* Возрастная норма и сложность каждого навыка. Это данные самого
   стандарта, не наши: в skills.json у навыка стоит age_norm и
   difficulty, а не принадлежность к возрастной корзине. Именно из
   этого следует, что ребенка можно поставить на шкалу развития
   точнее, чем в корзину по году рождения. */
const SKILL_NORM: Record<string, { mid: number; difficulty: number }> = {};
for (const sk of (skillsRef as { skills: { id: string; age_norm: { min: number; max: number }; difficulty: number }[] }).skills) {
  SKILL_NORM[sk.id] = { mid: (sk.age_norm.min + sk.age_norm.max) / 2, difficulty: sk.difficulty };
}

const BAND_RANGE: Record<Age, [number, number]> = {
  "1-3": [1, 3],
  "3-5": [3, 5],
  "5-7": [5, 7],
  "7-10": [7, 10],
};

const bandOf = (years: number): Age => {
  if (years < 3) return "1-3";
  if (years < 5) return "3-5";
  if (years < 7) return "5-7";
  return "7-10";
};

/* Точка на шкале сложности книг, к которой ведут ответы о ребенке.

   Осторожно с тем, чем это НЕ является. Это не оценка ребенка, не
   проверка развития и не заключение. Число здесь описывает книги,
   а не человека: оно говорит, книги какой сложности стоит смотреть,
   и ничего не говорит о том, все ли у ребенка в порядке. Разброс
   между детьми внутри любого возраста огромен и нормален.

   Поэтому наружу это число не показывается родителю. Ни в каком
   виде. Родитель видит список книг и причины, по которым они там
   оказались, а не цифру про своего ребенка.

   Считается как средняя возрастная норма продемонстрированных
   навыков, взвешенная по сложности: умение, которое дается позже,
   точнее указывает на нужную сложность книги. */
export function developmentalLevel(skills: string[]): { years: number; band: Age } | null {
  const known = skills.map((s) => SKILL_NORM[s]).filter(Boolean);
  if (!known.length) return null;
  const wsum = known.reduce((a, k) => a + k.difficulty, 0);
  const years = known.reduce((a, k) => a + k.mid * k.difficulty, 0) / wsum;
  return { years: Number(years.toFixed(1)), band: bandOf(years) };
}

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
  /* Возраст по календарю. Обязателен: правила безопасности в
     стандарте привязаны именно к нему, и обойти их нельзя. */
  age: Age;
  language?: string;
  type?: string;
  /* Что ребенок делает на самом деле. Именно отсюда берется
     точность выше возрастной корзины. */
  skills?: string[];
};

export type Outcome = {
  results: Result[];
  /* Точка на шкале сложности книг, если о ребенке что-то сказали.
     Может не совпасть с возрастной корзиной, и в этом весь смысл.
     Наружу как число про ребенка не выдается. */
  level: { years: number; band: Age } | null;
  /* Полоса, по которой шел подбор навыков и типов книги. */
  matchBand: Age;
  /* Полоса, по которой проверялась безопасность. Всегда строгая
     из двух: если ребенку пять, а ведет он себя как трехлетний,
     защиту снимать нельзя, и наоборот. */
  safetyBand: Age;
};

const BAND_ORDER: Age[] = ["1-3", "3-5", "5-7", "7-10"];
const stricter = (a: Age, b: Age): Age =>
  BAND_ORDER.indexOf(a) <= BAND_ORDER.indexOf(b) ? a : b;

export function recommend(q: Query): Outcome {
  const w = m.formula.F.weights;
  const out: Result[] = [];

  const level = q.skills && q.skills.length ? developmentalLevel(q.skills) : null;

  /* Подбор идет по той полосе, где ребенок находится по умениям.
     Проверка запретов идет по строгой из двух полос: возрастная
     корзина ошибается в обе стороны, и цена ошибки несимметрична.
     Книга слишком простая это скука, книга слишком тяжелая это
     испуг, и второе дороже. */
  const matchBand: Age = level ? level.band : q.age;
  const safetyBand: Age = level ? stricter(q.age, level.band) : q.age;

  for (const b of allBooks) {
    if (q.language && !(b.languages || []).includes(q.language.toUpperCase())) continue;
    if (q.type && b.type !== q.type) continue;

    const reasons: string[] = [];
    const blocked = hardExclusion(b, safetyBand);
    if (blocked) {
      out.push({ book: b, ours: isOurs(b), score: 0, verdict: "EXCLUDED", reasons: [blocked] });
      continue;
    }

    let s = skillScore(b, matchBand, reasons);
    const t = typeScore(b, matchBand, reasons);
    const p = profileScore(b, safetyBand, reasons);

    /* Совпадение с тем, что ребенок уже умеет, и разрыв по сложности.

       Первое понятно: книга, требующая того, что у ребенка есть,
       подходит лучше. Второе важнее и почти нигде не учитывается:
       книга, стоящая далеко от ребенка в любую сторону, плоха.
       Слишком простая наскучит, слишком сложная приведет к тому,
       что ребенок бросит и решит, что у него не получается. */
    if (q.skills && q.skills.length && level) {
      const have = (b.skills || []).filter((x) => q.skills!.includes(x)).length;
      const share = have / q.skills.length;

      const bookNorms = (b.skills || []).map((x) => SKILL_NORM[x]).filter(Boolean);
      let fit = 0.5;
      if (bookNorms.length) {
        const bookYears =
          bookNorms.reduce((a, k) => a + k.mid, 0) / bookNorms.length;
        const gap = Math.abs(bookYears - level.years);
        /* Полтора года в любую сторону считаются попаданием,
           дальше оценка падает и на трех годах разрыва обнуляется. */
        fit = Math.max(0, 1 - Math.max(0, gap - 1.5) / 1.5);
        reasons.push(
          `book sits at about ${bookYears.toFixed(1)} years, child at ${level.years}, gap ${gap.toFixed(1)}`
        );
      }
      reasons.push(`${have} of ${q.skills.length} demonstrated skills are exercised by this book`);
      s = s * 0.34 + share * 0.33 + fit * 0.33;
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

  return {
    results: out.sort((a, x) => x.score - a.score),
    level,
    matchBand,
    safetyBand,
  };
}
