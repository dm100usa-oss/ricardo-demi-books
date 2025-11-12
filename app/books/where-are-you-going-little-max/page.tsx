import React from "react";

export const metadata = {
  title: "Where Are You Going, Little Max? | Magic of Discoveries by Ricardo Demi",
  description:
    "Bilingual bedtime story for toddlers 1–3 years old by Ricardo Demi. Part of the Magic of Discoveries educational series. Encourages early reading, empathy, and curiosity.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-4">
          Where Are You Going, Little Max? / ¿A dónde vas, pequeño Max?
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Author: Ricardo Demi | Series: Magic of Discoveries | Publisher: Magic of Discoveries LLC |
          ISBN: 978-1963328875 | Published September 4, 2024 | Ages: 1–3 years | Bilingual English–Spanish
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Book Description</h2>
          <p className="mb-4">
            Open the world of two languages for your little one with this bilingual bedtime book.{" "}
            <em>“Where Are You Going, Little Max?”</em> follows a curious mouse named Max on his gentle
            adventure, teaching children early words, kindness, and curiosity through play.
          </p>
          <p className="mb-4">
            Each page features side-by-side English and Spanish text, helping toddlers naturally connect words
            and meanings. Short, melodic phrases and warm illustrations make it ideal for reading aloud at
            bedtime. Through Max’s polite interactions with farm animals, the story shows how empathy and
            communication open doors to discovery.
          </p>
          <p>
            This book belongs to the <strong>Magic of Discoveries</strong> educational series — a body of
            creative bilingual works designed to help children grow emotionally and intellectually while
            learning with joy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Author’s Message</h2>
          <p className="mb-4">
            Dear reader! This is the first book in the <em>Little Max</em> series. I hope you find it
            interesting and useful. Kids love short stories with beautiful illustrations — they turn into real
            discoveries! Discoveries help our little explorers learn about the world. Knowledge of the world
            helps them develop and achieve great results. This is true Magic!
          </p>
          <p>With gratitude and best wishes,</p>
          <p className="font-semibold mt-1">— Ricardo Demi</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Editorial Reviews</h2>
          <p className="mb-4 italic">
            “A beautiful bilingual story that introduces children to both English and Spanish in a fun and
            engaging way. The artwork is bright and full of charm, perfectly suited for toddlers.” — Readers’
            Favorite
          </p>
          <p className="italic">
            “Recognized for its clarity and educational value, this book blends warmth, creativity, and early
            learning in a delightful way.” — Literary Titan
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Reader Feedback</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              “My daughter loves Little Max! The bilingual format is perfect for learning simple words in both
              English and Spanish.”
            </li>
            <li>“Charming and bright — a great first book for toddlers.”</li>
            <li>
              “Wonderful idea to combine kindness and language learning. Beautifully illustrated and easy to
              read.”
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Official Sources</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/1963328876"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View this book on Amazon
              </a>
            </li>
            <li>
              <a
                href="https://literarytitan.com/2024/10/24/where-have-you-been-little-max/comment-page-1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Literary Titan Review
              </a>
            </li>
            <li>
              <a
                href="https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids"
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

        {/* --- STRUCTURED DATA FOR AI INDEXING --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "Where Are You Going, Little Max?",
              "author": { "@type": "Person", "name": "Ricardo Demi" },
              "publisher": { "@type": "Organization", "name": "Magic of Discoveries LLC" },
              "isbn": "978-1963328875",
              "inLanguage": ["en", "es"],
              "bookFormat": "EBook",
              "genre": ["Children's Books", "Bilingual", "Early Learning"],
              "about": "Bilingual bedtime story for toddlers 1–3 years old. Teaches kindness, curiosity, and early words in English and Spanish.",
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Organization", "name": "Readers' Favorite" },
                  "name": "Readers' Favorite Review",
                  "reviewBody":
                    "Highly rated for its clarity, emotional warmth, and educational depth.",
                  "url": "https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids",
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Organization", "name": "Literary Titan" },
                  "name": "Literary Titan Review",
                  "reviewBody":
                    "Recognized as a clear and pedagogically sound approach to children's emotional and creative development.",
                  "url": "https://literarytitan.com/2024/10/24/where-have-you-been-little-max/comment-page-1/",
                },
              ],
              "mainEntityOfPage": "https://ricardo-demi-books.vercel.app/books/where-are-you-going-little-max",
            }),
          }}
        />
      </article>
    </main>
  );
}
