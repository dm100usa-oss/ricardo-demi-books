import Link from "next/link";

export default function RecommendationsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">
        Recomendaciones de libros por tareas prácticas
      </h1>

      <p className="text-gray-700 max-w-2xl mb-8">
        Esta sección presenta una referencia estructurada de tareas prácticas de recomendación.
        Cada tarea sigue un modelo de parámetros consistente y conecta necesidades reales de lectura
        con libros adecuados.
      </p>

      <div className="flex flex-col gap-4">
        <Link
          href="/es/recommendations/tasks"
          className="text-blue-600 underline"
        >
          Ver recomendaciones por tarea
        </Link>

        <Link
          href="/es/ages"
          className="text-blue-600 underline"
        >
          Ver recomendaciones por edad
        </Link>
      </div>
    </main>
  );
}
