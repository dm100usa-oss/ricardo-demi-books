import Link from "next/link";

type Task = {
  id: string;
  slug: string;
  title: string;
  age_bands: string[];
};

async function getTasks(): Promise<Task[]> {
  const res = await fetch(
    "/api/recommendations/tasks.json",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">
        Recommendation tasks
      </h1>

      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id}>
            <Link
              href={`/recommendations/tasks/${task.slug}`}
              className="text-blue-600 underline"
            >
              {task.title}
            </Link>
            <div className="text-sm text-gray-600">
              Ages: {task.age_bands.join(", ")}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
