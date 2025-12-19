import { notFound } from "next/navigation";

type Task = {
  id: string;
  slug: string;
  title: string;
  context: string;
  selection_criteria: string[];
  parameters: Record<string, string>;
  related_tasks: string[];
  age_bands: string[];
};

async function getTasks(): Promise<Task[]> {
  const res = await fetch(
    "/api/recommendations/tasks.json",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function TaskPage({
  params,
}: {
  params: { slug: string };
}) {
  const tasks = await getTasks();
  const task = tasks.find((t) => t.slug === params.slug);

  if (!task) {
    notFound();
  }

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
              <strong>{key}:</strong> {value}
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
              <a
                href={`/recommendations/tasks/${slug}`}
                className="text-blue-600 underline"
              >
                {slug}
              </a>
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
              <a
                href={`/ages/${age}`}
                className="text-blue-600 underline"
              >
                {age}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
