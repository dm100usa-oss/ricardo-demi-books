import fs from "fs";
import path from "path";
import Link from "next/link";

type Task = {
  id: string;
  slug: string;
  title: string;
  age_bands: string[];
};

function getTasks(): Task[] {
  const filePath = path.join(
    process.cwd(),
    "public",
    "api",
    "recommendations",
    "tasks.json"
  );
  const json = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(json);
  return data.tasks;
}

export const metadata = {
  alternates: {
    canonical: "https://www.ricardo-demi.com/es/ages/5-7",
    languages: {
      en: "https://www.ricardo-demi.com/ages/5-7",
      es: "https://www.ricardo-demi.com/es/ages/5-7",
    },
  },
};

export default function Age5to7Page() {
  const tasks = getTasks().filter((task) =>
    task.age_bands.includes("5-7")
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1>Edades 5–7</h1>

      <h2>Tareas prácticas para esta edad</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/es/recommendations/tasks/${task.slug}`}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
