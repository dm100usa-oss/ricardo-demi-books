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
    canonical: "https://www.ricardo-demi.com/ages/7-10",
    languages: {
      en: "https://www.ricardo-demi.com/ages/7-10",
      es: "https://www.ricardo-demi.com/es/ages/7-10",
    },
  },
};

export default function Age7to10Page() {
  const tasks = getTasks().filter((task) =>
    task.age_bands.includes("7-10")
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1>Ages 7–10</h1>

      <h2>Practical tasks for this age</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/recommendations/tasks/${task.slug}`}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
