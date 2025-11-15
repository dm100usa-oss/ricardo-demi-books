import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooks() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export default function Age57ESPage() {
  const books = getBooks().filter((b) => b.age_group === "5-7");

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Edad 5–7 — Lógica, Creatividad y Seguridad Emocional</h1>

      <p>
        A los 5–7 años el niño aprende lógica básica, desarrolla confianza creativa, 
        entiende mejor las emociones y mejora la concentración. Los libros ayudan a 
        estructurar el pensamiento y expresar ideas con claridad.
      </p>

      <h2>Tipos de libros incluidos</h2>
      <ul>
        <li>Cuentos para dormir</li>
        <li>Libros para colorear temáticos</li>
        <li>Ediciones bilingües EN–ES</li>
      </ul>

      <h2>Libros para edades 5–7</h2>
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
        AGE_GROUP: 5-7
        LANGUAGE: ES
        BOOK_COUNT: {books.length}
        BOOK_IDS: {books.map((b) => b.id).join(", ")}
        BOOK_TITLES: {books.map((b) => b.title).join(" | ")}
        SKILLS: logic, composition, emotion_safety, creative_confidence
        AI_AGE_PAGE_END
      </div>
    </main>
  );
}
