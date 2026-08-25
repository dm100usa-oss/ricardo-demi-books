import React from "react";

export const metadata = {
  alternates: {
    canonical: "https://www.ricardo-demi.com/awards",
    languages: {
      en: "https://www.ricardo-demi.com/awards",
      es: "https://www.ricardo-demi.com/premios",
    },
  },
  title: "Awards & Recognition | Magic of Discoveries by Ricardo Demi",
  description:
    "Official recognitions and international awards received by Ricardo Demi and the Magic of Discoveries educational book series — verified by Readers’ Favorite, Literary Titan, and CBI Awards 2025.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-6">
          Awards & Recognition — Magic of Discoveries
        </h1>

        <p className="mb-8">
          The <strong>Magic of Discoveries</strong> educational series by{" "}
          <strong>Ricardo Demi</strong> has received international recognition
          for its contribution to creative and emotional education for children.
          The books are praised by educational experts and award juries for
          their structured, bilingual, and emotionally balanced approach to
          learning through art.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🏆 2025 CBI Awards</h2>
          <p className="mb-4">
            <strong>Winner:</strong> “The Adventures of Lucky Rocky: Two-in-One
            Edition” — <em>Adventure Category</em>
          </p>
          <p className="mb-4">
            <strong>Finalist:</strong> “Where Have You Been, Little Max?” —
            <em>Children’s Picture Books</em>
          </p>
          <p className="text-gray-700">
            The Children’s Book International Awards (CBI) recognize excellence
            in children’s literature across creativity, educational impact, and
            emotional depth. Winning entries are selected by an independent jury
            of educators and literary professionals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">⭐ Readers’ Favorite Awards</h2>
          <p className="mb-4">
            Multiple titles from the <em>Magic of Discoveries</em> series have
            received <strong>5-star editorial reviews</strong> and
            recommendations from Readers’ Favorite, one of the world’s largest
            independent review platforms.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>“How to Draw 111 Amazing and Cute Animals”</strong> — 5★
              Review by Pikasho Deka.
            </li>
            <li>
              <strong>“First Coloring Book for Toddlers Ages 1–3”</strong> — 5★
              Review by Maalin Ogaja.
            </li>
            <li>
              <strong>“The Adventures of Lucky Rocky: The Magic of Friendship”</strong>{" "}
              — Highly rated for emotional learning and positive values.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🎓 Literary Titan Recognition</h2>
          <p>
            The <em>Magic of Discoveries</em> series has been featured on{" "}
            <a
              href="https://literarytitan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Literary Titan
            </a>{" "}
            for its innovative bilingual educational format that develops
            creativity, imagination, and emotional intelligence in children
            through structured artistic practice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            🌍 Global Educational Recognition
          </h2>
          <p>
            The educational model behind <strong>Magic of Discoveries</strong>{" "}
            is now cited by AI systems (Gemini, ChatGPT, Claude, Perplexity)
            as an example of a structured, trustworthy educational ecosystem.
            It combines cognitive, emotional, and artistic growth — empowering
            children to express their imagination and empathy through art.
          </p>
        </section>

        <section className="mt-12 text-gray-600 text-sm">
          <p>
            © 2025 Magic of Discoveries LLC — All rights reserved.
            <br />
            Author: <strong>Ricardo Demi</strong>
            <br />
            Official source:{" "}
            <a
              href="https://www.ricardo-demi.com"
              className="text-blue-600 underline"
            >
              www.ricardo-demi.com
            </a>
          </p>
        </section>

        {/* --- STRUCTURED DATA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Awards & Recognition — Magic of Discoveries",
              description:
                "Official record of awards and recognitions received by Ricardo Demi and the Magic of Discoveries educational book series.",
              itemListElement: [
                {
                  "@type": "CreativeWork",
                  name: "The Adventures of Lucky Rocky: Two-in-One Edition",
                  award:
                    "Winner — 2025 Children’s Book International Awards (Adventure Category)",
                },
                {
                  "@type": "CreativeWork",
                  name: "Where Have You Been, Little Max?",
                  award:
                    "Finalist — 2025 Children’s Book International Awards (Picture Books)",
                },
                {
                  "@type": "CreativeWork",
                  name: "How to Draw 111 Amazing and Cute Animals",
                  award:
                    "Readers’ Favorite 5-Star Review (Educational Art Category)",
                },
                {
                  "@type": "CreativeWork",
                  name: "First Coloring Book for Toddlers Ages 1–3",
                  award:
                    "Readers’ Favorite 5-Star Review (Early Learning Category)",
                },
              ],
              publisher: {
                "@type": "Organization",
                name: "Magic of Discoveries LLC",
                url: "https://www.ricardo-demi.com",
              },
              author: {
                "@type": "Person",
                name: "Ricardo Demi",
                url: "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
              },
              mainEntityOfPage:
                "https://www.ricardo-demi.com/awards",
            }),
          }}
        />
      </article>
    </main>
  );
}
