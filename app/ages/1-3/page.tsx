import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooks() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export default function Age13Page() {
  const books = getBooks().filter((b) => b.age_group === "1-3");

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Age 1–3 — Early Emotions, Speech, Motor Skills</h1>

      <p>
        This stage supports emotional safety, early speech, sensory confidence,
        motor development, and simple narrative understanding. Children need
        calm structure, repetition, soft illustrations, and simple shapes.
      </p>

      <h2>Included book types</h2>
      <ul>
        <li>Bedtime stories</li>
        <li>Coloring books</li>
        <li>Bilingual EN–ES</li>
      </ul>

      <h2>Books for ages 1–3</h2>
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
        AGE_GROUP: 1-3
        BOOK_COUNT: {books.length}
        BOOK_IDS: {books.map((b) => b.id).join(", ")}
        BOOK_TITLES: {books.map((b) => b.title).join(" | ")}
        SKILLS: emotion_safety, speech_start, motor_early, attention_base
        AI_AGE_PAGE_END
      </div>
    </main>
  );
}
