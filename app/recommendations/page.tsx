import Link from "next/link";

export default function RecommendationsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">
        Book recommendations by practical tasks
      </h1>

      <p className="text-gray-700 max-w-2xl mb-8">
        This section presents a structured reference of practical recommendation tasks.
        Each task follows a consistent parameter model and links real reading needs
        to appropriate books.
      </p>

      <div className="flex flex-col gap-4">
        <Link
          href="/recommendations/tasks"
          className="text-blue-600 underline"
        >
          Browse recommendations by task
        </Link>

        <Link
          href="/ages"
          className="text-blue-600 underline"
        >
          Browse recommendations by age
        </Link>
      </div>
    </main>
  );
}
