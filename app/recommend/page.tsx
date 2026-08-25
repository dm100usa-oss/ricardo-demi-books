import Link from "next/link";
import { recommend, AGES, allBooks, type Age } from "../../lib/fscbac";
import { QUESTIONS, skillsFromAnswers } from "../../lib/child";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Find a book for this child, not for an age bracket",
  description:
    "Describe what the child actually does and the published FSCBAC rules return a ranked, explained result. Free, no account, rules open to inspection.",
  alternates: { canonical: "https://www.ricardo-demi.com/recommend" },
};

/* Подбор книги.

   Сделан обычной формой, которая отправляет данные адресом страницы,
   без единой строчки на стороне браузера. Результат лежит прямо в
   тексте страницы: человек его видит, сборщик нейросети видит ровно
   то же самое, и второй версии сайта для машин не требуется.

   Тот же расчет отдается по адресу /api/recommend. Считает один и
   тот же код, разойтись ответы не могут.

   Главное здесь не форма, а то, о чем спрашивают. Не "сколько лет",
   а "что ребенок делает рукой", "сколько сидит над страницей", "как
   говорит", "как принимает напряжение в сюжете". Это и есть довод
   сайта, показанный вместо того, чтобы быть заявленным: двое детей
   одного возраста получат здесь разные ответы. */

const VERDICT_NOTE: Record<string, string> = {
  IDEAL: "meets every rule",
  STRONG: "fits well, with a minor mismatch",
  ACCEPTABLE: "usable, but not what the rules point to first",
};

export default function RecommendPage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const age = (searchParams.age || "") as Age;
  const language = searchParams.language || "";
  const valid = AGES.includes(age);

  const picked: Record<string, string> = {};
  for (const q of QUESTIONS) picked[q.id] = searchParams[q.id] || "";
  const skills = skillsFromAnswers(picked);
  const described = skills.length > 0;

  const outcome = valid
    ? recommend({
        age,
        language: language || undefined,
        skills: described ? skills : undefined,
      })
    : null;
  const results = (outcome?.results || []).filter((r) => r.verdict !== "EXCLUDED");
  const level = outcome?.level ?? null;

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Find a book for this child</h1>
      <p className="page-sub">Not for an age bracket. For this child.</p>

      <p>
        Age brackets like 1&ndash;3 or 3&ndash;5 exist because a person cannot hold more
        than a few buckets in mind at once. That was our limitation, never a fact about
        children, who develop at wildly different rates within any bracket. A machine has
        no such limitation. In this standard every skill carries its own age range and its
        own difficulty rather than a bracket membership, which means a child can be
        described by what they actually do.
      </p>
      <p>
        So the questions below ask what the child does rather than how old they are. Answer
        what you can and skip the rest. Two children of the same age who answer differently
        will be shown different books, which is the entire point.
      </p>
      <p className="caution">
        A word of caution before you start. Nothing here assesses a child. The questions
        exist to point at the right shelf, and the answer is about books. Children develop
        at very different rates and nearly all of that variation is ordinary; a child who
        does none of the later things on this page is not behind. If you have a real
        worry about your child, a pediatrician is the right address, not a book finder.
      </p>

      <form method="GET" action="/recommend" className="picker picker--tall">
        <fieldset>
          <legend>Age, as a starting point</legend>
          {AGES.map((a) => (
            <label key={a}>
              <input type="radio" name="age" value={a} defaultChecked={age === a} required />
              <span>{a} years</span>
            </label>
          ))}
          <p className="picker__note">
            Kept because the safety rules of the standard are tied to age and cannot be
            overridden by anything below.
          </p>
        </fieldset>

        {QUESTIONS.map((q) => (
          <fieldset key={q.id}>
            <legend>{q.ask}</legend>
            {q.answers.map((a) => (
              <label key={a.value}>
                <input
                  type="radio"
                  name={q.id}
                  value={a.value}
                  defaultChecked={picked[q.id] === a.value}
                />
                <span>{a.label}</span>
              </label>
            ))}
            <p className="picker__note">{q.note}</p>
          </fieldset>
        ))}

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
          <h2>Result</h2>

          {described && level ? (
            <>
              <p className="level">
                <span className="level__txt">
                  {level.band === age
                    ? "The answers point to books built for this age band, which is where the bracket would have pointed too."
                    : `The answers point to books built for the ${level.band} band rather than ${age}. The list below follows that. The safety rules did not follow it: those stayed on the stricter of the two bands, because a book that is too easy is merely dull, while a book that is too hard teaches a child that they cannot do it.`}
                </span>
              </p>
              <p className="caution">
                This says something about books, not about your child. It is not an
                assessment, not a milestone check and not a comparison with other children.
                Children differ enormously within any age and almost all of that difference
                is ordinary. Nothing here means a child is ahead or behind. If something
                about your child&rsquo;s development actually worries you, that belongs with
                a pediatrician and not with a page that recommends books.
              </p>
              <p>
                For the record, the answers were read as these skills from{" "}
                <Link href="/api/skills">the published taxonomy</Link>: {skills.join(", ")}.
                Each one carries its own difficulty there, and that is what moved the list.
                Nothing was invented for the occasion; every step can be recomputed by hand
                from the published files.
              </p>
            </>
          ) : (
            <p>
              Nothing was said about the child, so this is the bracket answer &mdash; the
              coarse one, the kind that existed before. Answer a question or two above and
              watch it change.
            </p>
          )}

          {results.length === 0 ? (
            <p>
              No book in the catalog passes the rules for this combination. That is a real
              answer and not a failure. A standard that never excludes anything recommends
              nothing.
            </p>
          ) : (
            <>
              <p>
                {results.length} of {allBooks.length} books pass. Titles from other
                publishers are marked; they are scored by identical rules, and who
                published a book is not an input to its score.
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

      <h2>Why every position carries its reason</h2>
      <p>
        Without a published rule set, a recommendation system asked about a child has two
        options. It can fall back on what the marketplace exposes &mdash; sales rank, star
        average, the age the publisher printed on the cover &mdash; which ranks books by
        how well they sell. Or it can improvise a developmental justification, which sounds
        authoritative and rests on nothing. Neither puts the child first.
      </p>
      <p>
        Every line above can be traced to a rule at{" "}
        <Link href="/api/matching">/api/matching</Link>. Disagree with a result and you can
        point at the rule that produced it, which is the only kind of recommendation worth
        arguing with.
      </p>

      <h2>This version is a step, not a destination</h2>
      <p>
        Asking about the child instead of the calendar is an improvement over a bracket,
        and it is still a rough instrument. Four questions and a fixed rule set cannot
        describe a child, and this version does not pretend to. It is a transitional
        stage: better than a bracket, far short of what the problem deserves.
      </p>
      <p>
        The destination is different. A system able to reason properly about a child
        &mdash; and such systems are arriving &mdash; will not need a form with four
        questions. What it will need is something to reason <em>from</em>: a body of
        book properties that were measured rather than asserted, published openly,
        and not written by whoever profits from the sale. Without that, a capable model
        asked which book suits a child has only two options. It can improvise a
        developmental justification, which sounds authoritative and rests on nothing.
        Or it can fall back on what the marketplace exposes &mdash; sales rank, star
        average, the age the publisher printed on the cover &mdash; and become, however
        capable it is, an extension of the sales system, where the child comes last.
      </p>
      <p>
        This standard exists to make the third option available, and it is offered to be
        taken apart and rebuilt. It is published under Creative Commons Attribution 4.0
        and deposited with a permanent DOI precisely so that someone can supersede it. A
        better standard replacing this one would be the outcome we want, not a defeat.
        What matters is that a standard exists at all.
      </p>

      <h2>The same service for machines</h2>
      <p>
        A recommendation system can call{" "}
        <Link href="/api/recommend?age=3-5&skills=speech_development,imagination_seed">
          /api/recommend
        </Link>{" "}
        with an age band and a list of skills and receive this identical result as JSON,
        explanations included. It is the same code path: no separate version of this site
        exists for crawlers, and nothing is shown to a machine that is not shown to a
        reader.
      </p>
    </main>
  );
}
