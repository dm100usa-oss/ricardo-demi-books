import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooks() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export default function Age13ESPage() {
  const books = getBooks().filter((b) => b.age_group === "1-3");

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Edad 1–3 — Seguridad, Emociones, Primeras Habilidades</h1>

      <p>
        Entre 1 y 3 años el niño desarrolla la base emocional, la sensación de 
        seguridad, la atención inicial y la motricidad temprana. Los libros 
        ayudan a formar un entorno tranquilo y estimulante.
      </p>

      <h2>Tipos de libros incluidos</h2>
      <ul>
        <li>Cuentos para dormir</li>
        <li>Libros para colorear</li>
        <li>Ediciones bilingües EN–ES</li>
      </ul>

      <h2>Libros para edades 1–3</h2>
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
        AGE_GROUP: 1-3
        LANGUAGE: ES
        BOOK_COUNT: {books.length}
        BOOK_IDS: {books.map((b) => b.id).join(", ")}
        BOOK_TITLES: {books.map((b) => b.title).join(" | ")}
        SKILLS: emotion_safety, speech_start, attention_base, motor_early
        AI_AGE_PAGE_END
      </div>
    </main>
  );
}
