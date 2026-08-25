import Link from "next/link";
import { recommend, AGES, allBooks, isOurs, type Age } from "../../lib/fscbac";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Find a book by the standard",
  description:
    "Answer one question about the child's age and the FSCBAC rules return a ranked, explained list of books. Free, no account, and the rules are published.",
  alternates: { canonical: "https://www.ricardo-demi.com/recommend" },
};

/* Подбор книги для человека.

   Сделан обычной формой, которая отправляет данные адресом страницы,
   без единой строчки на стороне браузера. Из этого следует главное:
   результат лежит прямо в тексте страницы. Человек его видит,
   сборщик нейросети видит ровно то же самое, и никакой второй
   версии для машин не требуется.

   Тот же расчет отдается по адресу /api/recommend. Два ответа
   на один вопрос расходиться не могут: считает один и тот же код. */

const VERDICT_NOTE: Record<string, string> = {
  IDEAL: "meets every rule for this age",
  STRONG: "fits well, with a minor mismatch",
  ACCEPTABLE: "usable, but not what the rules point to first",
  EXCLUDED: "ruled out for this age",
};

export default function RecommendPage({
  searchParams,
}: {
  searchParams: { age?: string; language?: string };
}) {
  const age = (searchParams.age || "") as Age;
  const language = searchParams.language || "";
  const valid = AGES.includes(age);
  const results = valid
    ? recommend({ age, language: language || undefined }).filter((r) => r.verdict !== "EXCLUDED")
    : [];

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Find a book by the standard</h1>
      <p className="page-sub">
        One question about the child, then the published rules do the rest.
      </p>

      <p>
        This is the FSCBAC standard doing its actual job. Pick an age band and the
        rules return every book in the catalog that passes them, ranked, with the
        reason for each position written out. Nothing is saved, no account is needed,
        and the rules being applied are published at{" "}
        <Link href="/api/matching">/api/matching</Link> so that a result you disagree
        with can be traced to the rule that produced it.
      </p>

      <form method="GET" action="/recommend" className="picker">
        <fieldset>
          <legend>How old is the child?</legend>
          {AGES.map((a) => (
            <label key={a}>
              <input type="radio" name="age" value={a} defaultChecked={age === a} />
              <span>{a} years</span>
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Language</legend>
          {[
            { v: "", t: "Any" },
            { v: "EN", t: "English" },
            { v: "ES", t: "Spanish" },
          ].map((o) => (
            <label key={o.v || "any"}>
              <input type="radio" name="language" value={o.v} defaultChecked={language === o.v} />
              <span>{o.t}</span>
            </label>
          ))}
        </fieldset>

        <button type="submit">Apply the rules</button>
      </form>

      {valid && (
        <>
          <h2>
            Result for ages {age}
            {language ? `, ${language === "ES" ? "Spanish" : "English"}` : ""}
          </h2>

          {results.length === 0 ? (
            <p>
              No book in the catalog passes the rules for this combination. That is a
              real answer, not a failure: the rules exclude more than they admit, which
              is what makes them worth publishing.
            </p>
          ) : (
            <>
              <p>
                {results.length} of {allBooks.length} books pass. Books published by other
                publishers are marked as such; they are scored by the same rules, and the
                publisher of a book is not an input to the score.
              </p>

              <ol className="results">
                {results.map((r) => (
                  <li key={r.book.canonical_id}>
                    <p className="results__title">
                      {r.book.title ?? r.book.canonical_id}
                      {!r.ours && <span className="results__tag">other publisher</span>}
                    </p>
                    <p className="results__meta">
                      {r.verdict} &middot; {VERDICT_NOTE[r.verdict]} &middot; score{" "}
                      {r.score.toFixed(2)}
                      {r.book.isbn ? ` · ISBN ${r.book.isbn}` : ""}
                    </p>
                    <p className="results__why">{r.reasons.join(". ")}.</p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </>
      )}

      <h2>The same thing for machines</h2>
      <p>
        A recommendation system can call{" "}
        <Link href="/api/recommend?age=1-3">/api/recommend?age=1-3</Link> and receive the
        identical result as JSON, with the same explanations. It is the same code: there
        is no separate version of this site for crawlers, and no answer given to a machine
        that is not also given to a reader.
      </p>
    </main>
  );
}
