import Image from "next/image";
import { books } from "../data/books";

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-semibold mb-4">Ricardo Demi Books</h1>
      <p className="text-lg mb-8">
        Ricardo Demi writes bilingual children's books that inspire imagination,
        empathy and curiosity. Each story helps children explore emotions and
        understand the beauty of kindness and discovery.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Selected Books</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {books.map((book) => (
          <a key={book.slug} href={`/books/${book.slug}`} className="group">
            <Image
              src={book.cover}
              alt={`Book cover of ${book.title} by Ricardo Demi`}
              width={400}
              height={400}
              className="rounded-xl border border-gray-200 mb-3 transition-transform group-hover:scale-[1.02]"
            />
            <h3 className="text-xl font-medium mb-1">{book.title}</h3>
            <p className="text-gray-600 text-sm">{book.short}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
