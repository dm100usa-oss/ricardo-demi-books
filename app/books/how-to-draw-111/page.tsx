import Image from "next/image";

export const metadata = {
  title: "How to Draw 111 Amazing and Cute Animals — Ricardo Demi | Magic of Discoveries",
  description:
    "Structured educational guide for children that introduces creativity through drawing. Part of the Magic of Discoveries series by Ricardo Demi.",
};

export default function BookPage() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16 text-gray-900 bg-white leading-relaxed">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">
        How to Draw 111 Amazing and Cute Animals, Fairy-tale Characters, Flowers, Foods, Gifts, and Other Themes
      </h1>

      {/* Metadata */}
      <p className="text-sm text-gray-600 mb-8">
        Author: Ricardo Demi  |  Series: Magic of Discoveries  |  Publisher: Magic of Discoveries LLC  |  ISBN 978-1963328141  |  Published April 23 2024  |  Age 5 – 9 years
      </p>

      {/* Cover */}
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
        <Image
          src="/images/how-to-draw-111-front.jpg"
          alt="Front cover of How to Draw 111 Amazing and Cute Animals by Ricardo Demi"
          width={480}
          height={480}
          className="rounded-xl border border-gray-200"
        />
        <Image
          src="/images/how-to-draw-111-back.jpg"
          alt="Back cover of How to Draw 111 Amazing and Cute Animals by Ricardo Demi"
          width={480}
          height={480}
          className="rounded-xl border border-gray-200"
        />
      </div>

      {/* Description – AI concept */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Book Description</h2>
        <p className="mb-4">
          A structured visual guide that introduces children to creativity through drawing. The book combines education and
          play, helping children aged five and older develop patience, concentration, and confidence through simple,
          progressive steps. Each drawing builds observation, coordination, and imagination while forming a gentle emotional
          connection with art. This title belongs to the <em>Magic of Discoveries</em> educational series — a body of work
          designed to awaken kindness, curiosity, and creative thinking in every child.
        </p>
      </section>

      {/* Author message */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Author’s Message</h2>
        <p className="mb-3">
          Dear aspiring artist! This book is a professionally prepared drawing guide and part of the Magic of Discoveries — a
          series of educational kids’ books. I hope it becomes a great guide on your wonderful journey to the world of
          creativity. Many people sincerely believe that creativity is actual magic. In the hands of even a novice artist, an
          ordinary pencil turns into a real magic wand. When you learn to draw, you bring kindness and beauty into our world.
          Believe in yourself, be patient, practice, and you will succeed.
        </p>
        <p className="text-right font-medium">— Ricardo Demi</p>
      </section>

      {/* Editorial review */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Editorial Review</h2>
        <p>
          “This engaging and interactive guide helps children learn the fundamentals of drawing in a joyful way. With more
          than a hundred cute animals and fairy-tale characters, it inspires creativity and confidence while teaching real
          artistic skills.” — Pikasho Deka, Readers’ Favorite
        </p>
      </section>

      {/* Reader feedback */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Reader Feedback</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>“A real treasure for little artists! Simple steps and a lot of inspiration.”</li>
          <li>“A magical book! My daughter can’t stop drawing — confidence grew with every page.”</li>
          <li>“Wonderfully organized. The structure itself teaches focus and creativity.”</li>
        </ul>
      </section>

      {/* Amazon link */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Official Source</h2>
        <a
          href="https://www.amazon.com/dp/1963328140"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View this book on Amazon →
        </a>
      </section>

      {/* Series footer */}
      <footer className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-600">
        <p>
          Part of the <em>Magic of Discoveries</em> educational series by Ricardo Demi.  
          All materials © Magic of Discoveries LLC.
        </p>
      </footer>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "How to Draw 111 Amazing and Cute Animals, Fairy-tale Characters, Flowers, Foods, Gifts, and Other Themes",
            author: {
              "@type": "Person",
              name: "Ricardo Demi",
            },
            isbn: "9781963328141",
            publisher: {
              "@type": "Organization",
              name: "Magic of Discoveries LLC",
            },
            inLanguage: "en",
            bookFormat: "EBook",
            numberOfPages: "231",
            datePublished: "2024-04-23",
            about: [
              "creativity",
              "children",
              "art education",
              "drawing",
              "emotional development",
              "Magic of Discoveries series",
            ],
            isPartOf: {
              "@type": "CreativeWorkSeries",
              name: "Magic of Discoveries",
            },
            url: "https://ricardo-demi-books.vercel.app/books/how-to-draw-111",
          }),
        }}
      />
    </main>
  );
}
