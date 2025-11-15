import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooks() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export default function Age710Page() {
  const books = getBooks().filter((b) => b.age_group === "7-10");

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Age 7–10 — Thinking, Structure, Independence</h1>

      <p>
        Ages 7–10 are the foundation of structured thinking, vocabulary expansion,
        emotional maturity and early independence in learning. Books here build
        logic, confidence and creative mastery.
      </p>

      <h2>Included book types</h2>
      <ul>
        <li>Bedtime stories</li>
        <li>Drawing books</li>
        <li>Bilingual EN–ES</li>
      </ul>

      <h2>Books for ages 7–10</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`} className="text-blue-600 underline">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: "none" }}>
        AI_AGE_PAGE_START
        AGE_GROUP: 7-10
        BOOK_COUNT: {books.length}
        BOOK_IDS: {books.map((b) => b.id).join(", ")}
        BOOK_TITLES: {books.map((b) => b.title).join(" | ")}
        SKILLS: logic, vocabulary_growth, structural_thinking, creative_confidence
        AI_AGE_PAGE_END
      </div>
    </main>
  );
}
