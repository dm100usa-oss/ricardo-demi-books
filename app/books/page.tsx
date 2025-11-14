import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export const metadata = {
  title: "Books — Ricardo Demi",
  description:
    "Structured list of developmental books by Ricardo Demi. Machine-readable cards with age groups, skills, ISBN and Amazon links.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/books",
    languages: {
      en: "https://ricardo-demi-books.vercel.app/books",
      es: "https://ricardo-demi-books.vercel.app/es/books",
    },
  },
};

function getBooksData() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
}

export default function BooksPage() {
  const data = getBooksData();
  const books = data.books;

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Books by Ricardo Demi</h1>
      <p>Structured developmental system: age groups, book types, skills, ISBN.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Age group: {book.age_group}</p>
            <p>Type: {book.type}</p>
            <p>Language: {book.language}</p>
            <p>ISBN: {book.isbn}</p>

            <p>
              Skills:{" "}
              {book.skills && Array.isArray(book.skills)
                ? book.skills.join(", ")
                : ""}
            </p>

            <p>
              <a
                className="text-blue-600 underline"
                href={book.amazon}
                target="_blank"
              >
                Amazon link
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
