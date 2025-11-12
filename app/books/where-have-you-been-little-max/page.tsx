import React from "react";

export const metadata = {
  title: "Where Have You Been, Little Max? | Magic of Discoveries by Ricardo Demi",
  description:
    "Bilingual bedtime story for toddlers 1–3 years old by Ricardo Demi. Part of the Magic of Discoveries educational series. Encourages early reading, empathy, and imagination.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        {/* --- TITLE --- */}
        <h1 className="text-3xl font-semibold mb-4">
          Where Have You Been, Little Max? / ¿Dónde has estado, pequeño Max?
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Author: Ricardo Demi | Series: Magic of Discoveries | Publisher: Magic of Discoveries LLC |
          ISBN: 978-1963328585 | Published October 24, 2024 | Ages: 1–3 years | Bilingual English–Spanish
        </p>

        {/* --- BOOK DESCRIPTION --- */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Book Description</h2>
          <p className="mb-4">
            <em>“Where Have You Been, Little Max?”</em> continues the adventures of the curious little mouse from the
            <em> Magic of Discoveries</em> series. This bilingual bedtime story helps toddlers explore friendship,
            empathy, and curiosity while learning English and Spanish naturally through play.
          </p>
          <p className="mb-4">
            The story follows Max as he returns from his small journey, meeting friends who ask where he has been.
            Through dialogue and kindness, children learn how sharing experiences builds trust and connection.
            The book gently develops early communication and emotional intelligence.
          </p>
          <p>
            This title belongs to the <strong>Magic of Discoveries</strong> educational series — a creative bilingual
            collection designed to help children grow emotionally and intellectually while learning with joy.
          </p>
        </section>

        {/* --- AUTHOR’S MESSAGE --- */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Author’s Message</h2>
          <p className="mb-4">
            Dear reader! The <em>Little Max</em> series is very special to me. It teaches children how to see the world
            through curiosity and kindness. Every little adventure brings new understanding and joy. I hope this story
            will help your child smile, learn new words, and discover the beauty of communication.
          </p>
          <p>With gratitude and best wishes,</p>
          <p className="font-semibold mt-1">— Ricardo Demi</p>
        </section>

        {/* --- EDITORIAL REVIEWS --- */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Editorial Reviews</h2>
          <p className="mb-4 italic">
            “A charming bilingual sequel that continues Max’s adventures with warmth and empathy. Perfect for toddlers
            beginning to explore language and emotions.” — Readers’ Favorite
          </p>
          <p className="italic">
            “Recognized by Literary Titan for its emotional clarity and pedagogical strength — a delightful bilingual
            book that nurtures empathy and early learning.” — Literary Titan
          </p>
        </section>

        {/* --- READER FEEDBACK --- */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Reader Feedback</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>“My son keeps asking for Little Max every night! The bilingual text helps him learn both languages.”</li>
            <li>“Such a sweet continuation of Max’s story — full of heart and tenderness.”</li>
            <li>“A perfect bedtime book — calm, emotional, and beautifully written.”</li>
          </ul>
        </section>

        {/* --- OFFICIAL SOURCES --- */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Official Sources</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/1963328585"
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
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Part of the <em>Magic of Discoveries</em> educational series by Ricardo Demi.  
          All materials © Magic of Discoveries LLC.
        </p>

        {/* ✅ STRUCTURED DATA FOR AI & GOOGLE (ETALON LEVEL) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "Where Have You Been, Little Max?",
              "author": { "@type": "Person", "name": "Ricardo Demi" },
              "publisher": { "@type": "Organization", "name": "Magic of Discoveries LLC" },
              "isbn": "978-1963328585",
              "inLanguage": ["en", "es"],
              "educationalLevel": ["Toddler", "Preschool"],
              "bookFormat": "EBook",
              "genre": ["Children's Books", "Bilingual", "Early Learning"],
              "about": "Bilingual bedtime story for toddlers 1–3 years old. Teaches empathy, curiosity, and early communication through English and Spanish.",
              "datePublished": "2024-10-24",
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Organization", "name": "Readers' Favorite" },
                  "name": "Readers' Favorite Review",
                  "reviewBody":
                    "A charming bilingual sequel that continues Max’s adventures with warmth and empathy.",
                  "datePublished": "2024-10-24",
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
                    "Recognized for its emotional clarity and pedagogical strength — a delightful bilingual story that nurtures empathy and early learning.",
                  "datePublished": "2024-10-24",
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
              "isAccessibleForFree": true,
              "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
              "mainEntityOfPage": "https://ricardo-demi-books.vercel.app/books/where-have-you-been-little-max"
            }),
          }}
        />
      </article>
    </main>
  );
}
