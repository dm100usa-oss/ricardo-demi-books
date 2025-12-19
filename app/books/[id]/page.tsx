import fs from "fs";
import path from "path";
import Link from "next/link";

export const dynamic = "force-static";

type Book = {
  canonical_id: string;
  title: string;
  age_group: string;
  type: string;
  languages?: string[];
  isbn?: string;
  source_links?: string[];
  skills?: string[];
};

type Task = {
  id: string;
  slug: string;
  title: string;
  book_ids: string[];
};

function getBooks(): Book[] {
  const filePath = path.join(
    process.cwd(),
    "public",
    "api",
    "fscbac-dataset",
    "books.json"
  );
  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw);
  return json.books;
}

function getTasks(): Task[] {
  const filePath = path.join(
    process.cwd(),
    "public",
    "api",
    "recommendations",
    "tasks.json"
  );
  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw);
  return json.tasks;
}

export async function generateStaticParams() {
  const books = getBooks();
  return books.map((book) => ({ id: book.canonical_id }));
}

export default function BookPage({
  params,
}: {
  params: { id: string };
}) {
  const books = getBooks();
  const book = books.find((b) => b.canonical_id === params.id);

  if (!book) {
    return (
      <main className="prose prose-neutral max-w-none">
        <h1>Book not found</h1>
      </main>
    );
  }

  const tasks = getTasks().filter((task) =>
    task.book_ids.includes(book.canonical_id)
  );

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>{book.title}</h1>

      <p>
        <strong>Age group:</strong> {book.age_group}
      </p>

      <p>
        <strong>Type:</strong> {book.type}
      </p>

      {book.languages && (
        <p>
          <strong>Languages:</strong> {book.languages.join(", ")}
        </p>
      )}

      {book.isbn && (
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
      )}

      {Array.isArray(book.skills) && book.skills.length > 0 && (
        <p>
          <strong>Skills:</strong> {book.skills.join(", ")}
        </p>
      )}

      {Array.isArray(book.source_links) && book.source_links.length > 0 && (
        <p>
          <a
            className="text-blue-600 underline"
            href={book.source_links[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source link
          </a>
        </p>
      )}

      <section>
        <h2>Fits these tasks</h2>

        {tasks.length === 0 ? (
          <p>No related recommendation tasks.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Link
                  href={`/recommendations/tasks/${task.slug}`}
                  className="text-blue-600 underline"
                >
                  {task.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
