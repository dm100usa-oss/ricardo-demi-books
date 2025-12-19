import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

type Book = {
  canonical_id: string;
  title: string;
  isbn: string;
  languages: string[];
  type: string;
  age_group: string;
  skills: string[];
  translated_version: string | null;
  value_profile?: Record<string, string>;
  source_links?: string[];
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
  return books.map((book) => ({
    id: book.canonical_id,
  }));
}

export default function BookPage({
  params,
}: {
  params: { id: string };
}) {
  const books = getBooks();
  const book = books.find((b) => b.canonical_id === params.id);

  if (!book) {
    notFound();
  }

  const tasks = getTasks();
  const relatedTasks = tasks.filter((task) =>
    task.book_ids.includes(book.canonical_id)
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">
        {book.title}
      </h1>

      <ul className="space-y-2 text-gray-700">
        <li>
          <strong>Age group:</strong> {book.age_group}
        </li>
        <li>
          <strong>Type:</strong> {book.type}
        </li>
        <li>
          <strong>Languages:</strong> {book.languages.join(", ")}
        </li>
        <li>
          <strong>ISBN:</strong> {book.isbn}
        </li>
      </ul>

      {book.skills && book.skills.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Skills
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            {book.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {book.value_profile && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Value profile
          </h2>
          <ul className="space-y-1 text-gray-700">
            {Object.entries(book.value_profile).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/_/g, " ")}:</strong> {value}
              </li>
            ))}
          </ul>
        </section>
      )}

      {relatedTasks.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Fits these tasks
          </h2>
          <ul className="list-disc pl-5">
            {relatedTasks.map((task) => (
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
        </section>
      )}

      {book.source_links && book.source_links.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Sources
          </h2>
          <ul className="list-disc pl-5">
            {book.source_links.map((link) => (
              <li key={link}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
