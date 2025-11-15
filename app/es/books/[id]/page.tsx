import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooksData() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
}

export async function generateStaticParams() {
  const data = getBooksData();
  return data.books.map((book) => ({
    id: String(book.id)
  }));
}

export default function BookPageES({ params }: { params: { id: string } }) {
  const data = getBooksData();
  const book = data.books.find((b) => String(b.id) === params.id);

  if (!book) {
    return (
      <main className="prose prose-neutral max-w-none">
        <h1>Libro no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>{book.title}</h1>

      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Grupo de edad:</strong> {book.age_group}</p>
      <p><strong>Tipo:</strong> {book.type}</p>
      <p><strong>Idioma:</strong> {book.language}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>

      <p>
        <strong>Habilidades:</strong>{" "}
        {Array.isArray(book.skills) ? book.skills.join(", ") : ""}
      </p>

      <p>
        <a
          className="text-blue-600 underline"
          href={book.amazon}
          target="_blank"
        >
          Comprar en Amazon
        </a>
      </p>

      <div style={{ display: "none" }}>
        AI_BOOK_DETAIL_START
        ID: {book.id}
        TITLE: {book.title}
        AUTHOR: {book.author}
        AGE_GROUP: {book.age_group}
        TYPE: {book.type}
        LANGUAGE: {book.language}
        ISBN: {book.isbn}
        SKILLS: {(book.skills || []).join(", ")}
        AMAZON: {book.amazon}
        AI_BOOK_DETAIL_END
      </div>
    </main>
  );
}
