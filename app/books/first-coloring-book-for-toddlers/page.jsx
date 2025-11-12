import React from "react";

export const metadata = {
  title:
    "First Coloring Book for Toddlers Ages 1–3 | Magic of Creativity for Kids by Ricardo Demi",
  description:
    "111 Amazing and Cute Animals, Fairy-tale Characters, Flowers, Foods, Gifts, and Other Themes — a creative coloring book for toddlers ages 1–3 that develops imagination, patience, and joy of discovery. Part of the Magic of Discoveries educational series by Ricardo Demi.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-4">
          First Coloring Book for Toddlers Ages 1–3. 111 Amazing and Cute
          Animals, Fairy-tale Characters, Flowers, Foods, Gifts, and Other
          Themes. Magic of Creativity for Kids
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Author: Ricardo Demi | Series: Magic of Discoveries | Publisher: Magic
          of Discoveries LLC | ISBN: 978-1963328272 | Published April 22, 2024 |
          Ages: 1–3 years | Language: English
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Book Description</h2>
          <p className="mb-4">
            <strong>
              “First Coloring Book for Toddlers Ages 1–3” by Ricardo Demi
            </strong>{" "}
            is filled with fun and engaging illustrations that capture the
            imagination of any young child. Designed to ignite creativity early
            on, it offers clear, simple, large pictures perfect for toddlers and
            slightly older kids.
          </p>
          <p className="mb-4">
            Each image is thoughtfully placed in the center of the page and
            features bold outlines that make coloring easy for both left- and
            right-handed children. The book helps develop fine motor skills,
            focus, and artistic confidence — all while keeping the experience
            joyful and stress-free.
          </p>
          <p>
            This title is part of the <strong>Magic of Discoveries</strong>{" "}
            educational series — a structured system that unites imagination,
            emotional growth, and creative expression through learning and play.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Author’s Message</h2>
          <p className="mb-4">
            Dear parents and little artists! This coloring book was created with
            love and care to help the youngest children take their first steps
            into the world of art. Each picture is designed to be easy, friendly
            and inspiring — so that every child can feel successful while
            creating something beautiful. Creativity gives children confidence,
            and confidence helps them grow. This is the true Magic of Discovery!
          </p>
          <p>With gratitude and inspiration,</p>
          <p className="font-semibold mt-1">— Ricardo Demi</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Editorial Review</h2>
          <blockquote className="italic mb-4">
            “Filled with stunning pictures that capture imagination, this book
            helps kids develop fine motor skills and artistic confidence. Each
            page offers simple, clear images, perfect for toddlers learning to
            color. It’s educational, inspiring, and beautifully designed.” —
            <strong> Maalin Ogaja, Readers’ Favorite</strong>
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Reader Feedback</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              “A great coloring book for 1–3 year olds! Large, simple drawings
              and perfect paper quality.”
            </li>
            <li>
              “Our son loves it — he enjoys looking at the pages even when he’s
              not coloring. Excellent for motor skills.”
            </li>
            <li>
              “A wonderful book that keeps kids entertained and helps them
              learn. Highly recommend to all parents!”
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Book Details</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>Author:</strong> Ricardo Demi
            </li>
            <li>
              <strong>Series:</strong> Magic of Discoveries
            </li>
            <li>
              <strong>Publisher:</strong> Magic of Discoveries LLC
            </li>
            <li>
              <strong>Language:</strong> English
            </li>
            <li>
              <strong>ISBN:</strong> 978-1963328272
            </li>
            <li>
              <strong>Pages:</strong> 114
            </li>
            <li>
              <strong>Publication Date:</strong> April 22, 2024
            </li>
            <li>
              <strong>Category:</strong> Art Education, Early Learning
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Official Sources</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/1963328272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View this book on Amazon
              </a>
            </li>
            <li>
              <a
                href="https://readersfavorite.com/book-review/first-coloring-book-for-toddlers-ages-1-3"
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
          Part of the <em>Magic of Discoveries</em> educational series by Ricardo
          Demi. All materials © Magic of Discoveries LLC.
        </p>

        {/* --- STRUCTURED DATA (Rich Results + Google Validation) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              name: "First Coloring Book for Toddlers Ages 1–3. 111 Amazing and Cute Animals, Fairy-tale Characters, Flowers, Foods, Gifts, and Other Themes. Magic of Creativity for Kids",
              author: { "@type": "Person", name: "Ricardo Demi" },
              publisher: {
                "@type": "Organization",
                name: "Magic of Discoveries LLC",
              },
              isbn: "978-1963328272",
              inLanguage: "en",
              bookFormat: "Paperback",
              numberOfPages: 114,
              genre: ["Children's Books", "Art Education", "Early Learning"],
              about:
                "A creative coloring book for toddlers ages 1–3 that develops imagination, fine motor skills, and patience. Part of the Magic of Discoveries series.",
              datePublished: "2024-04-22",
              educationalAlignment: {
                "@type": "AlignmentObject",
                alignmentType: "educationalSubject",
                targetName: "Early Childhood Development",
                targetDescription:
                  "Supports fine motor skills, early speech development, and creativity in toddlers aged 1–3.",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                ratingCount: "20",
                reviewCount: "20",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Maalin Ogaja",
                    affiliation: {
                      "@type": "Organization",
                      name: "Readers’ Favorite",
                    },
                  },
                  name: "Readers’ Favorite Editorial Review",
                  reviewBody:
                    "A beautifully structured and educational coloring book that inspires toddlers to be creative and confident while developing essential fine motor skills.",
                  datePublished: "2024-04-22",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
              ],
              mainEntityOfPage:
                "https://ricardo-demi-books.vercel.app/books/first-coloring-book-for-toddlers",
            }),
          }}
        />
      </article>
    </main>
  );
}
