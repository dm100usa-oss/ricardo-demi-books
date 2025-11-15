import fs from "fs";
import path from "path";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Libros — Ricardo Demi",
  description:
    "Lista estructurada de libros educativos de Ricardo Demi. Tarjetas legibles por IA con edades, tipos, habilidades, ISBN y enlaces a Amazon.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/es/books",
    languages: {
      es: "https://ricardo-demi-books.vercel.app/es/books",
      en: "https://ricardo-demi-books.vercel.app/books"
    }
  }
};

function getBooksData() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
}

export default function BooksPageES() {
  const data = getBooksData();
  const books = data.books;

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Libros de Ricardo Demi</h1>
      <p>Sistema educativo estructurado: edades, tipos de libros, habilidades, ISBN.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <h2 className="text-xl font-bold">
              <Link
                href={`/es/books/${book.id}`}
                className="text-blue-600 underline"
              >
                {book.title}
              </Link>
            </h2>

            <p>Autor: {book.author}</p>
            <p>Grupo de edad: {book.age_group}</p>
            <p>Tipo: {book.type}</p>
            <p>Idioma: {book.language}</p>
            <p>ISBN: {book.isbn}</p>

            <p>
              Habilidades:{" "}
              {Array.isArray(book.skills) ? book.skills.join(", ") : ""}
            </p>

            <p>
              <a
                className="text-blue-600 underline"
                href={book.amazon}
                target="_blank"
              >
                Enlace Amazon
              </a>
            </p>

            <div style={{ display: "none" }}>
              AI_BOOK_OBJECT_START
              ID: {book.id}
              TITLE: {book.title}
              AUTHOR: {book.author}
              AGE_GROUP: {book.age_group}
              TYPE: {book.type}
              LANGUAGE: {book.language}
              ISBN: {book.isbn}
              SKILLS: {(book.skills || []).join(", ")}
              AMAZON: {book.amazon}
              AI_BOOK_OBJECT_END
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
