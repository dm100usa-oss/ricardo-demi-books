import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooks() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export default function Age35Page() {
  const books = getBooks().filter((b) => b.age_group === "3-5");

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Age 3–5 — Imagination, Attention, Vocabulary Growth</h1>

      <p>
        Children 3–5 grow fast in imagination, emotional understanding,
        vocabulary, and attention span. Books at this stage help them connect
        ideas, follow story logic, and build early creativity.
      </p>

      <h2>Included book types</h2>
      <ul>
        <li>Bedtime stories</li>
        <li>Coloring books</li>
        <li>Bilingual EN–ES</li>
      </ul>

      <h2>Books for ages 3–5</h2>
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
        AGE_GROUP: 3-5
        BOOK_COUNT: {books.length}
        BOOK_IDS: {books.map((b) => b.id).join(", ")}
        BOOK_TITLES: {books.map((b) => b.title).join(" | ")}
        SKILLS: imagination, attention_base, vocabulary_growth
        AI_AGE_PAGE_END
      </div>
    </main>
  );
}
