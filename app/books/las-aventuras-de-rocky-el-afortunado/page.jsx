import React from "react";

export const metadata = {
  title:
    "Las Aventuras de Rocky, el Afortunado. La Magia de la Amistad | Ricardo Demi – Magic of Discoveries",
  description:
    "Cuentos en español para niños de 3 a 8 años por Ricardo Demi. Parte de la serie educativa Magic of Discoveries. Enseña valores de amistad, bondad y respeto, ayudando a los niños a aprender inglés de forma positiva y natural.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-4">
          Las Aventuras de Rocky, el Afortunado. La Magia de la Amistad
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Autor: Ricardo Demi | Serie: Magic of Discoveries | Editorial: Magic of Discoveries LLC |
          ISBN: 978-1963328042 | Publicado: 21 de abril de 2024 | Edad: 3–8 años | Idioma: Español
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Descripción del Libro</h2>
          <p className="mb-4">
            <em>“Las Aventuras de Rocky, el Afortunado. La Magia de la Amistad”</em> es un cálido libro
            infantil en español que invita a los niños a descubrir el valor de la amistad, la bondad
            y la curiosidad a través de historias cortas, ilustraciones hermosas y mensajes positivos.
          </p>
          <p className="mb-4">
            Este libro ayuda a los pequeños lectores a crear una actitud positiva hacia el idioma inglés
            antes del estudio intensivo, relacionando las nuevas palabras con emociones y recuerdos felices.
            Las historias son ideales para leer antes de dormir o en familia, fomentando valores y
            el amor por el aprendizaje.
          </p>
          <p>
            Forma parte de la serie <strong>Magic of Discoveries</strong>, que ayuda a los niños a
            desarrollar empatía, imaginación y amor por el conocimiento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mensaje del Autor</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic">
            “Rocky enseña a los niños que aprender puede ser divertido y amable. 
            A través de sus aventuras, los pequeños lectores descubren que el conocimiento 
            y la amistad caminan juntos, y que un corazón curioso siempre encuentra el camino 
            hacia la felicidad.”  
            <br />— Ricardo Demi
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Opiniones de Lectores</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              “Un libro encantador y didáctico para los niños. Rocky es un gran modelo a seguir.” — Liza
              Lorang, 22 septiembre 2024
            </li>
            <li>
              “¡Ideal para aprender inglés! Las historias son cautivadoras y llenas de bondad.” — Kira,
              12 septiembre 2024
            </li>
            <li>
              “Un libro fascinante para los más pequeños, introduce el aprendizaje de un nuevo idioma de
              manera divertida.” — Ekaterina Eliseeva García, 8 mayo 2024
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Fuentes Oficiales</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/1963328042"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Ver este libro en Amazon
              </a>
            </li>
            <li>
              <a
                href="https://ricardo-demi-books.vercel.app/books/the-adventures-of-lucky-rocky"
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
              "name": "Las Aventuras de Rocky, el Afortunado. La Magia de la Amistad",
              "alternateName": "The Adventures of Lucky Rocky. The Magic of Friendship",
              "author": { "@type": "Person", "name": "Ricardo Demi" },
              "publisher": { "@type": "Organization", "name": "Magic of Discoveries LLC" },
              "isbn": "978-1963328042",
              "inLanguage": "es",
              "alternateLanguage": "en",
              "bookFormat": "Paperback",
              "genre": ["Libros para niños", "Educativo", "Cuentos ilustrados"],
              "about":
                "Libro infantil ilustrado en español para niños de 3 a 8 años. Enseña valores de amistad, bondad y respeto, fomentando una actitud positiva hacia el aprendizaje del inglés.",
              "datePublished": "2024-04-21",
              "numberOfPages": 40,
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Liza Lorang" },
                  "reviewBody":
                    "Un libro encantador y educativo. Rocky enseña amabilidad y curiosidad, con historias breves e inolvidables.",
                  "datePublished": "2024-09-22",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Kira" },
                  "reviewBody":
                    "Ideal para aprender inglés con interés. Las historias son cautivadoras y llenas de ternura.",
                  "datePublished": "2024-09-12",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Ekaterina Eliseeva García" },
                  "reviewBody":
                    "Un libro fascinante para los más pequeños. Introduce el aprendizaje de un nuevo idioma de manera divertida y amable.",
                  "datePublished": "2024-05-08",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "ratingCount": "24",
                "reviewCount": "24"
              },
              "mainEntityOfPage":
                "https://ricardo-demi-books.vercel.app/books/las-aventuras-de-rocky-el-afortunado",
              "sameAs": [
                "https://www.amazon.com/dp/1963328042",
                "https://ricardo-demi-books.vercel.app/books/the-adventures-of-lucky-rocky"
              ]
            }),
          }}
        />
      </article>
    </main>
  );
}
