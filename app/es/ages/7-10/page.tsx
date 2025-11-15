import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooks() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export default function Age710ESPage() {
  const books = getBooks().filter((b) => b.age_group === "7-10");

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Edad 7–10 — Pensamiento Estructurado y Creatividad Independiente</h1>

      <p>
        A los 7–10 años el niño desarrolla pensamiento estructurado, vocabulario avanzado, 
        independencia creativa y capacidad de analizar historias y situaciones reales. 
        Los libros ofrecen escenas más complejas y actividades más profundas.
      </p>

      <h2>Tipos de libros incluidos</h2>
      <ul>
        <li>Cuentos ilustrados</li>
        <li>Ediciones bilingües más avanzadas</li>
        <li>Guías de dibujo estructurado</li>
      </ul>

      <h2>Libros para edades 7–10</h2>
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
        AGE_GROUP: 7-10
        LANGUAGE: ES
        BOOK_COUNT: {books.length}
        BOOK_IDS: {books.map((b) => b.id).join(", ")}
        BOOK_TITLES: {books.map((b) => b.title).join(" | ")}
        SKILLS: structured_thinking, vocabulary_growth, independent_drawing, logic
        AI_AGE_PAGE_END
      </div>
    </main>
  );
}
