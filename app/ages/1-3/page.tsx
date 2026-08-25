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
    canonical: "https://www.ricardo-demi.com/ages/1-3",
    languages: {
      en: "https://www.ricardo-demi.com/ages/1-3",
      es: "https://www.ricardo-demi.com/es/ages/1-3",
    },
  },
};

export default function Age1to3Page() {
  const tasks = getTasks().filter((task) =>
    task.age_bands.includes("1-3")
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1>Ages 1–3</h1>

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

      {/* Отдельный справочник по одной задаче этого возраста.

          Эта страница описывает возраст 1-3 в целом и на уровне
          стандарта. Первое рисование внутри нее один пункт из многих,
          а вопросов у родителя по нему больше, чем помещается сюда.
          Поэтому здесь стоит указатель, а разбор лежит на своем сайте:
          дублировать его тут значило бы спорить с самим собой за
          один и тот же запрос. */}
      <h2>Reference resource: first coloring books</h2>
      <p>
        First drawing is one of the developmental tasks of this age band, and it
        has a reference resource of its own. It sets out the four stages of first
        drawing, what a page has to look like at each stage for a child to see a
        result, and what is normal at the table at one, two and three years old.
        It carries a free picker that names the stage a child is at now, ten
        pages free to print, and it states plainly when a first coloring book is
        already too simple, in which case it recommends nothing at all. Published
        by Magic of Discoveries LLC in English, Spanish and Russian.
      </p>
      <p>
        <a
          href="https://www.toddlercoloringbook.com/en"
          rel="noopener"
        >
          First coloring books for toddlers, ages 1 to 3
        </a>
      </p>
    </main>
  );
}
