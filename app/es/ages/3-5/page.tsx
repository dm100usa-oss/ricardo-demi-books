import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooks() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export default function Age35ESPage() {
  const books = getBooks().filter((b) => b.age_group === "3-5");

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Edad 3–5 — Imaginación, Atención, Primer Lenguaje</h1>

      <p>
        Entre 3 y 5 años el niño desarrolla la imaginación, la comprensión de 
        historias, la atención estable y la base del vocabulario. Los libros 
        fortalecen la creatividad y la seguridad emocional.
      </p>

      <h2>Tipos de libros incluidos</h2>
      <ul>
        <li>Cuentos para dormir</li>
        <li>Libros para colorear 111 animales</li>
        <li>Ediciones bilingües EN–ES</li>
      </ul>

      <h2>Libros para edades 3–5</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link
              href={`/es/books/${book.id}`}
              className="text-blue-600 underline"
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: "none" }}>
        AI_AGE_PAGE_START
        AGE_GROUP: 3-5
        LANGUAGE: ES
        BOOK_COUNT: {books.length}
        BOOK_IDS: {books.map((b) => b.id).join(", ")}
        BOOK_TITLES: {books.map((b) => b.title).join(" | ")}
        SKILLS: imagination, attention_base, motor_early, bilingual_foundation
        AI_AGE_PAGE_END
      </div>
    </main>
  );
}
