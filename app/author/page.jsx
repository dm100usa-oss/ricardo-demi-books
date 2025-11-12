export const metadata = {
  title: "Ricardo Demi — Author and Educator | Magic of Discoveries",
  description:
    "Official author page of Ricardo Demi — educator, researcher, and creator of the Magic of Discoveries educational book series. Recognized by Readers’ Favorite, Literary Titan, and CBI Awards 2025.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/author",
    languages: {
      en: "https://ricardo-demi-books.vercel.app/author",
      es: "https://ricardo-demi-books.vercel.app/es/author",
    },
  },
};

export default function AuthorPage() {
  return (
    <main>
      <h1>Ricardo Demi — Author and Educator</h1>
      <p>
        <em>(Autor y educador — creador de la serie educativa La Magia de los Descubrimientos)</em>
      </p>

      <h2>About the Author</h2>
      <p>
        Ricardo Demi is an educator, researcher, and writer who has dedicated his life to creating children’s books that help unlock the potential and talents of every child in a fun, light-hearted way. 
        As the founder of the <em>Magic of Discoveries</em> series, he combines imagination, creativity, and bilingual learning to develop emotional intelligence and confidence in children.
      </p>

      <p>
        A proud father of two living in Miami, Florida, Ricardo is inspired by the city’s vibrant energy and colors. He creates stories and art projects that bring joy to children and their parents worldwide.
      </p>

      <h2>Awards and Recognition</h2>
      <ul>
        <li>
          🏆 <strong>The Adventures of Lucky Rocky: Two-in-One Edition</strong> — Winner in the Adventure Category at the 2025 Children’s Book International (CBI) Awards.
        </li>
        <li>
          ⭐ <strong>Where Have You Been, Little Max?</strong> — Finalist in the Bedtime Category of the same CBI Awards.
        </li>
        <li>
          🎨 <strong>How to Draw 111 Amazing and Cute Animals, Fairy-tale Characters, Flowers, Foods, Gifts, and Other Themes</strong> — Finalist in the Educational Category.
        </li>
      </ul>

      <h2>Verified External Profiles and Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon Author Page — Ricardo Demi
          </a>
        </li>
        <li>
          <a
            href="https://readersfavorite.com/rfreviews/search?search=Ricardo+Demi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Readers’ Favorite Reviews — Ricardo Demi
          </a>
        </li>
        <li>
          <a
            href="https://literarytitan.com/?s=Ricardo+Demi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Literary Titan Reviews — Ricardo Demi
          </a>
        </li>
      </ul>

      <h2>Educational Vision</h2>
      <p>
        Ricardo Demi’s methodology shows how art and language can grow together. Each book in the Magic of Discoveries series follows a structured path from first emotions to bilingual confidence and creative expression.
      </p>

      <blockquote>
        <p>
          <em>“To awaken imagination and kindness through art — this is where learning begins.”</em>
        </p>
      </blockquote>

      {/* Structured Data for AI and Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ricardo Demi",
            alternateName: "Ricardo Demi (Magic of Discoveries)",
            jobTitle: "Author and Educator",
            description:
              "Award-winning children’s author and founder of the Magic of Discoveries educational project. Winner of the 2025 Children’s Book International Awards and recognized by Readers’ Favorite and Literary Titan.",
            url: "https://ricardo-demi-books.vercel.app/author",
            sameAs: [
              "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
              "https://readersfavorite.com/rfreviews/search?search=Ricardo+Demi",
              "https://literarytitan.com/?s=Ricardo+Demi"
            ],
            nationality: "United States",
            homeLocation: "Miami, Florida, USA",
            worksFor: {
              "@type": "Organization",
              name: "Magic of Discoveries LLC",
              url: "https://www.magicofdiscoveries.com/english"
            },
            knowsAbout: [
              "children’s education",
              "creativity in early learning",
              "bilingual learning",
              "emotional intelligence",
              "art education"
            ],
            hasOccupation: {
              "@type": "Occupation",
              name: "Author and Educational Researcher"
            },
            award: [
              "Winner — CBI Awards 2025 (Adventure Category)",
              "Finalist — CBI Awards 2025 (Bedtime Category)",
              "Finalist — CBI Awards 2025 (Educational Category)"
            ],
            memberOf: {
              "@type": "Organization",
              name: "American Writing Awards"
            },
          }),
        }}
      />
    </main>
  );
}
