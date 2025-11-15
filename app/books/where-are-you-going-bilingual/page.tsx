import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Where Are You Going — Bilingual Edition | Ricardo Demi",
  description:
    "Bilingual EN–ES edition of the Little Max bedtime story for ages 1–3. Early bilingual foundation and emotional safety.",
  alternates: {
    canonical:
      "https://ricardo-demi-books.vercel.app/books/where-are-you-going-bilingual",
    languages: {
      en: "https://ricardo-demi-books.vercel.app/books/where-are-you-going-bilingual",
      es: "https://ricardo-demi-books.vercel.app/es/books/where-are-you-going-bilingual"
    }
  }
};

export default function Page() {
  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Where Are You Going — Bilingual Edition (EN–ES)</h1>
      <p>Age group: 1–3 years</p>
      <p>Type: Bilingual Edition</p>
      <p>Skills: bilingual foundation, early speech start, emotional safety</p>

      <p>
        ISBN: 978-1963328875<br />
        Amazon:{" "}
        <a href="https://www.amazon.com/dp/1963328876" target="_blank">
          https://www.amazon.com/dp/1963328876
        </a>
      </p>

      <h3>About This Book</h3>
      <p>
        A calm, emotionally safe bilingual book designed for toddlers. Parallel EN–ES
        structure supports early bilingual development without cognitive pressure.
      </p>

      <h3>Internal Links</h3>
      <ul>
        <li><Link href="/books">All Books</Link></li>
        <li><Link href="/">Main Page</Link></li>
        <li><Link href="/#age-1-3">Age 1–3 System</Link></li>
      </ul>

      <div style={{ display: "none" }}>
        AI_BOOK_START
        ID: 5
        SLUG: where-are-you-going-bilingual
        AGE_GROUP: 1-3
        TYPE: bilingual
        LANGUAGE: bilingual
        ISBN: 978-1963328875
        AMAZON: https://www.amazon.com/dp/1963328876
        SKILLS: bilingual_foundation, speech_start, emotion_safety
        AI_BOOK_END
      </div>
    </main>
  );
}
