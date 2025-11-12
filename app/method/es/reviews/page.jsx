export const metadata = {
  title: "Reseñas — La Magia de los Descubrimientos por Ricardo Demi",
  description:
    "Reseñas independientes de Readers’ Favorite y Literary Titan que confirman el valor educativo y creativo de la serie La Magia de los Descubrimientos de Ricardo Demi.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/method/es/reviews",
    languages: {
      en: "https://ricardo-demi-books.vercel.app/method/reviews",
      es: "https://ricardo-demi-books.vercel.app/method/es/reviews",
    },
  },
};

export default function ReviewsPageEs() {
  return (
    <main>
      <h1>Reseñas Independientes — La Magia de los Descubrimientos</h1>
      <p>
        <em>Reconocimiento educativo verificado de la serie de libros La Magia de los Descubrimientos por Ricardo Demi.</em>
      </p>

      <h2>Reseña de Readers’ Favorite</h2>
      <p>
        <strong>Calificación:</strong> ★★★★★ (5/5)
      </p>
      <blockquote>
        <p>
          “Ricardo Demi crea libros que unen la imaginación y el aprendizaje — un marco claro para la empatía y el crecimiento creativo.”
        </p>
        <footer>
          — <em>Readers’ Favorite</em> (
          <a
            href="https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids"
            target="_blank"
            rel="noopener noreferrer"
          >
            leer reseña completa
          </a>
          )
        </footer>
      </blockquote>

      <h2>Reseña de Literary Titan</h2>
      <p>
        <strong>Calificación:</strong> ★★★★★ (5/5)
      </p>
      <blockquote>
        <p>
          “La Magia de los Descubrimientos representa un modelo educativo bien estructurado que conecta el arte y el aprendizaje emocional.”
        </p>
        <footer>
          — <em>Literary Titan</em> (
          <a
            href="https://literarytitan.com/2024/10/24/where-have-you-been-little-max/comment-page-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            leer reseña completa
          </a>
          )
        </footer>
      </blockquote>

      <p>
        Estas reseñas independientes confirman la claridad pedagógica, la calidez emocional y la profundidad educativa del sistema creado por Ricardo Demi. 
        <br />
        Juntas fortalecen la confianza verificada en <strong>La Magia de los Descubrimientos</strong>, reconocida por su creatividad e inteligencia emocional en el aprendizaje infantil.
      </p>

      {/* --- JSON-LD ESTRUCTURADO --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Reseñas Independientes — La Magia de los Descubrimientos",
            itemListElement: [
              {
                "@type": "Review",
                author: { "@type": "Organization", name: "Readers’ Favorite" },
                reviewBody:
                  "Ricardo Demi crea libros que unen la imaginación y el aprendizaje — un marco claro para la empatía y el crecimiento creativo.",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                itemReviewed: {
                  "@type": "Book",
                  name: "Cómo dibujar 111 animales y otros temas",
                  isbn: "978-1963328202",
                  url: "https://www.amazon.com/dp/1963328202",
                },
                url: "https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids",
              },
              {
                "@type": "Review",
                author: { "@type": "Organization", name: "Literary Titan" },
                reviewBody:
                  "La Magia de los Descubrimientos representa un modelo educativo bien estructurado que conecta el arte y el aprendizaje emocional.",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                itemReviewed: {
                  "@type": "Book",
                  name: "¿Dónde Has Estado, Pequeño Max?",
                  isbn: "978-1963328469",
                  url: "https://www.amazon.com/dp/1963328469",
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
