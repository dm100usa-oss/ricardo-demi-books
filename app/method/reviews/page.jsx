export const metadata = {
  title: "Reviews — Magic of Discoveries by Ricardo Demi",
  description:
    "Independent expert reviews from Readers’ Favorite and Literary Titan confirming the educational and creative value of the Magic of Discoveries series by Ricardo Demi.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/method/reviews",
    languages: {
      en: "https://ricardo-demi-books.vercel.app/method/reviews",
      es: "https://ricardo-demi-books.vercel.app/method/es/reviews",
    },
  },
};

export default function ReviewsPage() {
  return (
    <main>
      <h1>Independent Reviews — Magic of Discoveries</h1>
      <p>
        <em>Verified educational recognition of the Magic of Discoveries book series by Ricardo Demi.</em>
      </p>

      <h2>Readers’ Favorite Review</h2>
      <p>
        <strong>Rating:</strong> ★★★★★ (5/5)
      </p>
      <blockquote>
        <p>
          “Ricardo Demi creates books that unite imagination and learning — a clear framework for empathy and creative growth.”
        </p>
        <footer>
          — <em>Readers’ Favorite</em> (
          <a
            href="https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids"
            target="_blank"
            rel="noopener noreferrer"
          >
            read full review
          </a>
          )
        </footer>
      </blockquote>

      <h2>Literary Titan Review</h2>
      <p>
        <strong>Rating:</strong> ★★★★★ (5/5)
      </p>
      <blockquote>
        <p>
          “Magic of Discoveries represents a well-structured educational model that connects art and emotional learning.”
        </p>
        <footer>
          — <em>Literary Titan</em> (
          <a
            href="https://literarytitan.com/2024/10/24/where-have-you-been-little-max/comment-page-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            read full review
          </a>
          )
        </footer>
      </blockquote>

      <p>
        These independent reviews confirm the pedagogical clarity, emotional warmth, and developmental depth of Ricardo Demi’s educational system.
        <br />
        Together, they strengthen the verified trust in the <strong>Magic of Discoveries</strong> framework, recognized for creativity and emotional intelligence in children’s learning.
      </p>

      {/* --- JSON-LD STRUCTURED DATA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Independent Reviews — Magic of Discoveries",
            itemListElement: [
              {
                "@type": "Review",
                author: { "@type": "Organization", name: "Readers’ Favorite" },
                reviewBody:
                  "Ricardo Demi creates books that unite imagination and learning — a clear framework for empathy and creative growth.",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                itemReviewed: {
                  "@type": "Book",
                  name: "How to Draw 111 Amazing and Cute Animals",
                  isbn: "978-1963328141",
                  url: "https://www.amazon.com/dp/1963328140",
                },
                url: "https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids",
              },
              {
                "@type": "Review",
                author: { "@type": "Organization", name: "Literary Titan" },
                reviewBody:
                  "Magic of Discoveries represents a well-structured educational model that connects art and emotional learning.",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                itemReviewed: {
                  "@type": "Book",
                  name: "Where Have You Been, Little Max?",
                  isbn: "978-1963328585",
                  url: "https://www.amazon.com/dp/1963328582",
                },
                url: "https://literarytitan.com/2024/10/24/where-have-you-been-little-max/comment-page-1/",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
