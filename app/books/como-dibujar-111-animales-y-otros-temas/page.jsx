import React from "react";

export const metadata = {
  title:
    "Cómo dibujar 111 Sorprendentes y Adorables Animales, Personajes de Cuentos, Flores, Alimentos, Regalos y otros Temas | Ricardo Demi – Magic of Discoveries",
  description:
    "Guía educativa paso a paso para niños de 5 a 9 años creada por Ricardo Demi. Parte de la serie educativa Magic of Discoveries. Desarrolla la creatividad, la paciencia y la coordinación mientras los niños aprenden a dibujar.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-4">
          Cómo dibujar 111 Sorprendentes y Adorables Animales, Personajes de Cuentos, Flores, Alimentos, Regalos y otros Temas
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Autor: Ricardo Demi | Serie: Magic of Discoveries | Editorial: Magic of Discoveries LLC |
          ISBN: 978-1963328172 | Publicado: 3 de mayo de 2024 | Edad: 5–9 años | Idioma: Español
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Descripción del Libro</h2>
          <p className="mb-4">
            <em>“Cómo dibujar 111 Sorprendentes y Adorables Animales…”</em> es una guía de dibujo paso a paso creada
            especialmente para jóvenes artistas. Con instrucciones claras y dibujos encantadores, este libro enseña a
            los niños a dibujar de forma fácil, divertida y estructurada.
          </p>
          <p className="mb-4">
            A través de la práctica artística, los niños desarrollan coordinación, paciencia y confianza en sí mismos.
            Cada lección estimula la observación, la imaginación y la comprensión visual del mundo que los rodea.
          </p>
          <p>
            Este libro pertenece a la serie educativa <strong>Magic of Discoveries</strong>, una colección dedicada a
            fomentar la creatividad y el aprendizaje emocional en los niños mediante el arte y la exploración.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Propósito Educativo</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Desarrollar habilidades artísticas y motricidad fina.</li>
            <li>Fomentar la paciencia, la concentración y la autoexpresión.</li>
            <li>Estimular la imaginación y la observación visual.</li>
            <li>Promover la confianza a través del proceso creativo.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mensaje del Autor</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic">
            “Querido lector: Este libro fue creado con amor y cuidado para ayudarte a descubrir el maravilloso mundo del
            dibujo. Cada línea y cada trazo te acercan a la magia de la creatividad. No temas equivocarte — cada intento
            te hace mejor artista. Cree en ti, sé paciente y disfruta el proceso. ¡El lápiz en tus manos es una varita
            mágica!”  
            <br />— Ricardo Demi
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Opiniones de Lectores</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>“Un libro maravilloso para pequeños artistas. ¡A mi hija le encantó!” — Oleksii</li>
            <li>“Excelente guía paso a paso, ideal para niños de 5 años o más.” — Terry Lesyk</li>
            <li>“Nos ha encantado. Perfecto para despertar la creatividad en los más pequeños.” — Ekaterina Eliseeva García</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Fuentes Oficiales</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/1963328175"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Ver este libro en Amazon
              </a>
            </li>
            <li>
              <a
                href="https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Reseña en Readers’ Favorite (versión inglesa)
              </a>
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Parte de la serie educativa <em>Magic of Discoveries</em> por Ricardo Demi.  
          Todos los derechos reservados © Magic of Discoveries LLC.
        </p>

        {/* --- STRUCTURED DATA (Rich Results + AI Visibility) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "Cómo dibujar 111 Sorprendentes y Adorables Animales, Personajes de Cuentos, Flores, Alimentos, Regalos y otros Temas",
              "alternateName": "How to Draw 111 Amazing and Cute Animals, Fairy-tale Characters, Flowers, Foods, Gifts, and Other Themes",
              "author": { "@type": "Person", "name": "Ricardo Demi" },
              "publisher": { "@type": "Organization", "name": "Magic of Discoveries LLC" },
              "isbn": "978-1963328172",
              "inLanguage": "es",
              "alternateLanguage": "en",
              "bookFormat": "Paperback",
              "genre": ["Libros para niños", "Educativo", "Arte y Dibujo"],
              "about": "Guía educativa de dibujo paso a paso para niños de 5 a 9 años. Enseña observación, coordinación y creatividad mediante ilustraciones claras y divertidas.",
              "datePublished": "2024-05-03",
              "numberOfPages": 231,
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Oleksii" },
                  "reviewBody": "Un libro maravilloso para pequeños artistas. ¡Mi hija no podía dejar de dibujar!",
                  "datePublished": "2024-09-06",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Ekaterina Eliseeva García" },
                  "reviewBody": "Perfecto para despertar la creatividad de los niños de forma divertida. Muy recomendable.",
                  "datePublished": "2025-05-12",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "14",
                "reviewCount": "14"
              },
              "mainEntityOfPage":
                "https://ricardo-demi-books.vercel.app/books/como-dibujar-111-animales-y-otros-temas",
              "sameAs": [
                "https://www.amazon.com/dp/1963328175",
                "https://www.amazon.com/dp/1963328140"
              ]
            }),
          }}
        />
      </article>
    </main>
  );
}
