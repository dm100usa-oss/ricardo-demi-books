import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";

type Task = {
  id: string;
  slug: string;
  title: string;
  context: string;
  selection_criteria: string[];
  parameters: Record<string, string>;
  book_ids: string[];
  related_tasks: string[];
  age_bands: string[];
};

type Book = {
  canonical_id: string;
  title: string;
  age_group: string;
  type: string;
};

function getTasks(): Task[] {
  const filePath = path.join(process.cwd(), "public", "api", "recommendations", "tasks.json");
  const json = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(json);
  return data.tasks;
}

function getBooks(): Book[] {
  const filePath = path.join(process.cwd(), "public", "api", "fscbac-dataset", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(json);
  return data.books;
}

export default function TaskPage({
  params,
}: {
  params: { slug: string };
}) {
  const tasks = getTasks();
  const task = tasks.find((t) => t.slug === params.slug);

  if (!task) {
    notFound();
  }

  const allBooks = getBooks();
  const taskBooks = allBooks.filter((book) => 
    task.book_ids.includes(book.canonical_id)
  );

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">
        {task.title}
      </h1>

      <section className="mb-6">
        <p className="text-gray-700 max-w-2xl">
          {task.context}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Selection criteria
        </h2>
        <ul className="list-disc pl-5">
          {task.selection_criteria.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Parameter model
        </h2>
        <ul className="space-y-1">
          {Object.entries(task.parameters).map(([key, value]) => (
            <li key={key}>
              <strong>{key.replace(/_/g, " ")}:</strong> {value}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Recommended books
        </h2>
        <ul className="space-y-2">
          {taskBooks.map((book) => (
            <li key={book.canonical_id}>
              <Link
                href={`/books/${book.canonical_id}`}
                className="text-blue-600 underline"
              >
                {book.title}
              </Link>
              <span className="text-sm text-gray-600 ml-2">
                (Age {book.age_group})
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Related tasks
        </h2>
        <ul className="list-disc pl-5">
          {task.related_tasks.map((slug) => (
            <li key={slug}>
              <Link
                href={`/recommendations/tasks/${slug}`}
                className="text-blue-600 underline"
              >
                {slug}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          By age
        </h2>
        <ul className="list-disc pl-5">
          {task.age_bands.map((age) => (
            <li key={age}>
              <Link
                href={`/ages/${age}`}
                className="text-blue-600 underline"
              >
                {age}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
