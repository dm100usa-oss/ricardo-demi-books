import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw);
  return json.books.map((book) => ({ id: book.id }));
}

export default function BookPage({ params }) {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw);

  const book = json.books.find((b) => b.id === params.id);

  if (!book) {
    return (
      <main className="prose prose-neutral max-w-none">
        <h1>Book not found</h1>
      </main>
    );
  }

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>{book.title}</h1>

      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Age group:</strong> {book.age_group}</p>
      <p><strong>Type:</strong> {book.type}</p>
      <p><strong>Language:</strong> {book.language}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>

      <p>
        <strong>Skills:</strong>{" "}
        {Array.isArray(book.skills) ? book.skills.join(", ") : ""}
      </p>

      <p>
        <a
          className="text-blue-600 underline"
          href={book.amazon}
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon link
        </a>
      </p>

      <div style={{ display: "none" }}>
        AI_BOOK_PAGE_START
        ID: {book.id}
        TITLE: {book.title}
        AUTHOR: {book.author}
        AGE_GROUP: {book.age_group}
        TYPE: {book.type}
        ISBN: {book.isbn}
        LANGUAGE: {book.language}
        SKILLS: {(book.skills || []).join(", ")}
        AMAZON: {book.amazon}
        AI_BOOK_PAGE_END
      </div>
    </main>
  );
}
