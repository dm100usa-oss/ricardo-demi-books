import { books } from "../../../data/books";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) return notFound();

  return (
    <article>
      <Image
        src={book.cover}
        alt={`Book cover of ${book.title} by Ricardo Demi`}
        width={600}
        height={600}
        className="rounded-xl border border-gray-200 mb-8"
      />
      <h1 className="text-3xl font-semibold mb-4">{book.title}</h1>
      <p className="text-gray-700 mb-6">{book.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Themes</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        {book.themes.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">About the Author</h2>
      <p className="text-gray-700 mb-8">
        Ricardo Demi creates stories that nurture emotional intelligence and
        imagination in children. His bilingual books are used by parents and
        educators around the world.
      </p>

      <a
        href={book.amazon}
        className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        Available on Amazon
      </a>
    </article>
  );
}
