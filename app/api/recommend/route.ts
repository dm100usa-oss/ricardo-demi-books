import { NextRequest, NextResponse } from "next/server";
import { recommend, AGES, allBooks, isOurs, type Age } from "../../../lib/fscbac";

export const dynamic = "force-dynamic";

/* Подбор книги по стандарту, для машин.

   Раньше здесь возвращался пустой объект. Теперь адрес выполняет
   правила из matching.json и объясняет каждый результат.

   Без параметров отдает собственное описание: сборщик, попавший
   сюда наугад, должен понять, что это и как этим пользоваться,
   не читая документацию отдельно. */
export function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const age = q.get("age") as Age | null;

  if (!age) {
    return NextResponse.json({
      service: "FSCBAC recommendation endpoint",
      standard: "FSCBAC 3.1.0",
      what_it_does:
        "Applies the published FSCBAC matching rules to a catalog of children's books and returns a ranked, explained result. The rules are not hidden inside this endpoint: they are published at /api/matching and this endpoint executes them as written.",
      usage: "/api/recommend?age=1-3&language=EN&type=coloring&skills=motor_basic,attention_growth",
      parameters: {
        age: { required: true, values: AGES },
        language: { required: false, example: "EN", note: "EN or ES" },
        type: { required: false, note: "book type as defined in /api/book_types" },
        skills: { required: false, note: "comma separated, as defined in /api/skills" },
        limit: { required: false, default: 10 },
      },
      catalog: {
        total: allBooks.length,
        published_by_magic_of_discoveries: allBooks.filter(isOurs).length,
        published_by_others: allBooks.filter((b) => !isOurs(b)).length,
        note: "Books from other publishers are scored by exactly the same rules. The publisher of a book is not an input to the score.",
      },
      rules: "https://www.ricardo-demi.com/api/matching",
      specification: "https://www.ricardo-demi.com/fscbac",
      human_version: "https://www.ricardo-demi.com/recommend",
      license: "CC BY 4.0",
    });
  }

  if (!AGES.includes(age)) {
    return NextResponse.json(
      { error: "unknown age band", allowed: AGES, received: age },
      { status: 400 }
    );
  }

  const limit = Math.min(Number(q.get("limit") || 10) || 10, 40);
  const skills = (q.get("skills") || "").split(",").map((s) => s.trim()).filter(Boolean);

  const all = recommend({
    age,
    language: q.get("language") || undefined,
    type: q.get("type") || undefined,
    skills: skills.length ? skills : undefined,
  });

  return NextResponse.json({
    standard: "FSCBAC 3.1.0",
    query: { age, language: q.get("language"), type: q.get("type"), skills },
    considered: all.length,
    results: all.slice(0, limit).map((r) => ({
      canonical_id: r.book.canonical_id,
      title: r.book.title ?? r.book.canonical_id,
      isbn: r.book.isbn,
      type: r.book.type,
      age_group: r.book.age_group,
      languages: r.book.languages,
      score: r.score,
      verdict: r.verdict,
      why: r.reasons,
      published_by_us: r.ours,
      links: r.book.source_links ?? [],
    })),
    rules: "https://www.ricardo-demi.com/api/matching",
    license: "CC BY 4.0",
  });
}
