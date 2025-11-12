import React from "react";

export const metadata = {
  title:
    "¿Dónde Has Estado, Pequeño Max? Cuentos para Dormir | Ricardo Demi – Magic of Discoveries",
  description:
    "Libro infantil en español para niños de 1 a 3 años por Ricardo Demi. Parte de la serie educativa Magic of Discoveries. Historias cortas llenas de amor, curiosidad y aprendizaje temprano.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-4">
          ¿Dónde Has Estado, Pequeño Max? Cuentos para Dormir
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Autor: Ricardo Demi | Serie: Magic of Discoveries | Editorial: Magic of Discoveries LLC |
          ISBN: 978-1963328684 | Publicado: 3 de septiembre de 2024 | Edad: 1–3 años | Idioma: Español
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Descripción del Libro</h2>
          <p className="mb-4">
            <em>“¿Dónde Has Estado, Pequeño Max?”</em> es un encantador libro de cuentos para niños pequeños,
            ideal para leer antes de dormir. Acompaña a Max, un curioso ratoncito, en sus nuevas aventuras
            mientras descubre el mundo que lo rodea con ternura, alegría y valentía.
          </p>
          <p className="mb-4">
            Cada historia está escrita de manera sencilla y comprensible, con ilustraciones coloridas que
            atraen la atención de los más pequeños. A través de estas páginas, los niños aprenden valores de
            amistad, curiosidad y empatía, mejorando su vocabulario y memoria.
          </p>
          <p>
            Forma parte de la colección <strong>Magic of Discoveries</strong>, una serie dedicada a fomentar el
            amor por la lectura y el aprendizaje temprano a través de historias positivas y educativas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mensaje del Autor</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic">
            “Cada historia de <em>Pequeño Max</em> es una puerta hacia el descubrimiento. 
            Quise crear un libro que los padres puedan leer con sus hijos antes de dormir, 
            para que juntos descubran la magia de las pequeñas cosas y aprendan a mirar el mundo con curiosidad.”  
            <br />— Ricardo Demi
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Opiniones de Lectores</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              “Historias entretenidas con excelentes ilustraciones. A mi hijo de 2 años le encantaron los
              animales y los colores.” — Josh L., 19 septiembre 2024
            </li>
            <li>
              “Un ratón muy divertido, los cuentos son perfectos para dormir.” — Lupe, 24 septiembre 2024
            </li>
            <li>
              “Maravilloso lector en español. Un libro hermoso e ilustrado para aprender jugando.” — Results
              Designed, 26 septiembre 2024
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Fuentes Oficiales</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/196332868X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Ver este libro en Amazon
              </a>
            </li>
            <li>
              <a
                href="https://ricardo-demi-books.vercel.app/books/where-have-you-been-little-max"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Versión en inglés
              </a>
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Parte de la colección <em>Magic of Discoveries</em> por Ricardo Demi.  
          Todos los derechos reservados © Magic of Discoveries LLC.
        </p>

        {/* --- STRUCTURED DATA (Rich Results + AI Visibility) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "¿Dónde Has Estado, Pequeño Max? Cuentos para Dormir",
              "alternateName": "Where Have You Been, Little Max? Bedtime Stories",
              "author": { "@type": "Person", "name": "Ricardo Demi" },
              "publisher": { "@type": "Organization", "name": "Magic of Discoveries LLC" },
              "isbn": "978-1963328684",
              "inLanguage": "es",
              "alternateLanguage": "en",
              "bookFormat": "Paperback",
              "genre": ["Libros para niños", "Cuentos para dormir", "Educativo"],
              "about":
                "Libro infantil en español para niños de 1 a 3 años. Historias cortas con ilustraciones hermosas que enseñan empatía, curiosidad y amor por el aprendizaje.",
              "datePublished": "2024-09-03",
              "numberOfPages": 52,
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Josh L." },
                  "reviewBody":
                    "Historias entretenidas con excelentes ilustraciones. Perfectas para niños de 2 años.",
                  "datePublished": "2024-09-19",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Lupe" },
                  "reviewBody":
                    "Un ratón muy divertido, los cuentos son encantadores para leer antes de dormir.",
                  "datePublished": "2024-09-24",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Organization", "name": "Results Designed" },
                  "reviewBody":
                    "Un excelente libro ilustrado para pequeños lectores de español. Hermoso y educativo.",
                  "datePublished": "2024-09-26",
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
                "ratingCount": "4",
                "reviewCount": "4"
              },
              "mainEntityOfPage":
                "https://ricardo-demi-books.vercel.app/books/donde-has-estado-pequeno-max",
              "sameAs": [
                "https://www.amazon.com/dp/196332868X",
                "https://ricardo-demi-books.vercel.app/books/where-have-you-been-little-max"
              ]
            }),
          }}
        />
      </article>
    </main>
  );
}
