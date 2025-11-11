import Image from "next/image";
import { books } from "../data/books";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl font-semibold mb-4 text-gray-900">
          Ricardo Demi — Magic of Discoveries
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-2xl">
          Welcome to the world of <span className="italic">Magic of Discoveries</span> — a collection of
          educational and artistic books created to help children unlock their imagination, kindness, and
          curiosity. Each story and guide is designed to inspire creativity and confidence, turning learning
          into a joyful adventure.
        </p>
      </header>

      {/* Author message */}
      <section className="mb-16 bg-gray-50 border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">A message from the author</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          “Each book I create is a small discovery — an opportunity for a child to believe in themselves,
          explore the beauty of the world, and express emotions through art and imagination. I hope these
          pages bring light, joy, and creativity into your home.”
        </p>
        <p className="text-right text-gray-700 font-medium">— Ricardo Demi</p>
      </section>

      {/* Books section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">Books in the Series</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {books.map((book) => (
            <a
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group transition-transform hover:scale-[1.02]"
            >
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <Image
                  src={book.cover}
                  alt={`Book cover of ${book.title} by Ricardo Demi`}
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-medium mb-2 text-gray-900 group-hover:text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{book.short}</p>
                  <p className="text-gray-500 text-xs">Part of the “Magic of Discoveries” series</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Magic of Discoveries — Educational book series by Ricardo Demi.
        </p>
      </footer>
    </main>
  );
}
