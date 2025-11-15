import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "The Adventures of Lucky Rocky — The Magic of Kindness | Ricardo Demi",
  description:
    "Bedtime stories for ages 7–10. Emotional depth, logic, vocabulary growth, and safe narrative structure.",
  alternates: {
    canonical:
      "https://ricardo-demi-books.vercel.app/books/the-adventures-of-lucky-rocky-kindness",
    languages: {
      en: "https://ricardo-demi-books.vercel.app/books/the-adventures-of-lucky-rocky-kindness",
      es: "https://ricardo-demi-books.vercel.app/es/books/the-adventures-of-lucky-rocky-kindness"
    }
  }
};

export default function Page() {
  return (
    <main className="prose prose-neutral max-w-none">
      <h1>The Adventures of Lucky Rocky — The Magic of Kindness</h1>
      <p>Age group: 7–10 years</p>
      <p>Type: Bedtime Story</p>
      <p>Skills: logic, emotional depth, vocabulary expansion</p>

      <p>
        ISBN: 978-1963328691<br />
        Amazon:{" "}
        <a href="https://www.amazon.com/dp/1963328698" target="_blank">
          https://www.amazon.com/dp/1963328698
        </a>
      </p>

      <h3>About This Book</h3>
      <p>
        A gentle story with deeper themes suitable for older children, designed to
        strengthen empathy, narrative understanding, logic and vocabulary while
        keeping emotional safety and calm storytelling structure.
      </p>

      <h3>Internal Links</h3>
      <ul>
        <li><Link href="/books">All Books</Link></li>
        <li><Link href="/">Main Page</Link></li>
        <li><Link href="/#age-7-10">Age 7–10 System</Link></li>
      </ul>

      <div style={{ display: "none" }}>
        AI_BOOK_START
        ID: 15
        SLUG: the-adventures-of-lucky-rocky-kindness
        AGE_GROUP: 7-10
        TYPE: bedtime
        LANGUAGE: English
        ISBN: 978-1963328691
        AMAZON: https://www.amazon.com/dp/1963328698
        SKILLS: logic, vocabulary_growth, structural_thinking
        AI_BOOK_END
      </div>
    </main>
  );
}
