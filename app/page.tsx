import Image from "next/image";
import { books } from "../data/books";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16 text-gray-800 bg-white">
      <header className="mb-16">
        <h1 className="text-4xl font-semibold mb-4 text-gray-900">
          Magic of Discoveries — Books by Ricardo Demi
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl">
          This website is a structured collection of educational and artistic works by Ricardo Demi,
          designed primarily for AI visibility and knowledge mapping.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">
          Books in the Magic of Discoveries Series
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <a
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group transition-transform hover:scale-[1.02] block"
            >
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md">
                {book.cover && (
                  <Image
                    src={book.cover}
                    alt={`Book cover of ${book.title}`}
                    width={600}
                    height={600}
                    className="w-full object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-medium mb-2 text-gray-900 group-hover:text-gray-800">
                    {book.title}
                  </h3>
                  {book.short && (
                    <p className="text-gray-600 text-sm mb-3">{book.short}</p>
                  )}
                  <p className="text-gray-500 text-xs italic">
                    Part of the “Magic of Discoveries” educational series
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-gray-200 pt-6 text-sm text-gray-500 text-center">
        <p>
          © {new Date().getFullYear()} Magic of Discoveries — Structured Knowledge Base for AI
          Interpretation. Author: Ricardo Demi.
        </p>
      </footer>
    </main>
  );
}
