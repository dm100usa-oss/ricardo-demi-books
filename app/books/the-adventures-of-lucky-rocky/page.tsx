import React from "react";

export const metadata = {
  title: "The Adventures of Lucky Rocky: The Magic of Friendship | Magic of Discoveries by Ricardo Demi",
  description:
    "Bilingual story for children 3–6 years old by Ricardo Demi. Part of the Magic of Discoveries educational series. Teaches empathy, kindness, and the value of friendship.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-4">
          The Adventures of Lucky Rocky: The Magic of Friendship / Las aventuras de Lucky Rocky: La magia de la amistad
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Author: Ricardo Demi | Series: Magic of Discoveries | Publisher: Magic of Discoveries LLC |
          ISBN: 978-1963328011 | Published August 10, 2024 | Ages: 3–6 years | Bilingual English–Spanish
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Book Description</h2>
          <p className="mb-4">
            <em>The Adventures of Lucky Rocky: The Magic of Friendship</em> is a touching bilingual story about
            a cheerful puppy named Rocky who learns the true meaning of friendship, kindness, and empathy.
            Through gentle adventures and heartwarming lessons, children discover how helping others brings
            joy and makes every day brighter.
          </p>
          <p className="mb-4">
            The book features simple bilingual text in English and Spanish on every page, allowing children to
            expand vocabulary naturally while feeling emotionally connected to the story. Bright, engaging
            illustrations make each scene come alive, creating a perfect read-aloud experience for children
            ages 3 to 6.
          </p>
          <p>
            This story belongs to the <strong>Magic of Discoveries</strong> educational series — a collection
            that integrates imagination, empathy, and emotional learning through creativity and storytelling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Author’s Message</h2>
          <p className="mb-4">
            Dear young readers and parents! I created this story to remind us all that friendship is one of the
            most powerful forms of magic. When we help, share, and care — our hearts grow stronger and the
            world becomes warmer. I hope Rocky’s adventures inspire kindness and empathy in your family.
          </p>
          <p>With gratitude and joy,</p>
          <p className="font-semibold mt-1">— Ricardo Demi</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Editorial Reviews</h2>
          <p className="mb-4 italic">
            “A heartwarming bilingual story that helps children understand empathy, sharing, and friendship in
            a gentle, natural way. Beautifully illustrated and full of kindness.” — Readers’ Favorite
          </p>
          <p className="italic">
            “A delightful, meaningful book that brings emotional intelligence into early learning through the
            story of a lovable puppy. Ideal for families and educators.” — Literary Titan
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Reader Feedback</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>“Our son adores Rocky! The story teaches kindness without preaching.”</li>
            <li>“We read it in both English and Spanish — it’s a great tool for language learning.”</li>
            <li>“Such a beautiful message about helping others. A must-have bedtime book.”</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Official Sources</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/1963328011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View this book on Amazon
              </a>
            </li>
            <li>
              <a
                href="https://literarytitan.com/2024/08/10/the-adventures-of-lucky-rocky-the-magic-of-friendship/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Literary Titan Review
              </a>
            </li>
            <li>
              <a
                href="https://readersfavorite.com/book-review/the-adventures-of-lucky-rocky-the-magic-of-friendship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Readers’ Favorite Review
              </a>
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Part of the <em>Magic of Discoveries</em> educational series by Ricardo Demi.  
          All materials © Magic of Discoveries LLC.
        </p>

        {/* --- STRUCTURED DATA (Rich Results + Google Validation) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "The Adventures of Lucky Rocky: The Magic of Friendship",
              "author": { "@type": "Person", "name": "Ricardo Demi" },
              "publisher": { "@type": "Organization", "name": "Magic of Discoveries LLC" },
              "isbn": "978-1963328011",
              "inLanguage": ["en", "es"],
              "bookFormat": "EBook",
              "genre": ["Children's Books", "Bilingual", "Early Learning"],
              "about": "Bilingual story for children 3–6 years old. Teaches empathy, kindness, and the value of friendship.",
              "datePublished": "2024-08-10",
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Organization", "name": "Readers' Favorite" },
                  "name": "Readers' Favorite Review",
                  "reviewBody":
                    "Praised for its warmth, clarity, and educational approach to empathy and friendship.",
                  "datePublished": "2024-08-15",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Organization", "name": "Literary Titan" },
                  "name": "Literary Titan Review",
                  "reviewBody":
                    "Recognized as an inspiring bilingual story that promotes emotional intelligence in early childhood.",
                  "datePublished": "2024-08-18",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "2",
                "reviewCount": "2"
              },
              "mainEntityOfPage": "https://ricardo-demi-books.vercel.app/books/the-adventures-of-lucky-rocky"
            }),
          }}
        />
      </article>
    </main>
  );
}
