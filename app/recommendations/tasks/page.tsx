import Link from "next/link";
import fs from "fs";
import path from "path";

type Task = {
  id: string;
  slug: string;
  title: string;
  age_bands: string[];
};

function getTasks(): Task[] {
  const filePath = path.join(process.cwd(), "public", "api", "recommendations", "tasks.json");
  const json = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(json);
  return data.tasks;
}

export default function TasksPage() {
  const tasks = getTasks();

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
