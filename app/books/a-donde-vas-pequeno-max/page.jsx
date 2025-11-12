import React from "react";

export const metadata = {
  title:
    "¿A dónde vas, Pequeño Max? | Ricardo Demi – Magic of Discoveries",
  description:
    "Libro infantil bilingüe de Ricardo Demi para niños de 1 a 3 años. Parte de la serie educativa Magic of Discoveries. Enseña empatía, curiosidad y primeras palabras a través de una tierna historia ilustrada.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-4">¿A dónde vas, Pequeño Max?</h1>

        <p className="text-sm text-gray-600 mb-6">
          Autor: Ricardo Demi | Serie: Magic of Discoveries | Editorial: Magic of Discoveries LLC |
          ISBN: 978-1963328469 | Publicado: 25 de abril de 2024 | Edad: 1–3 años | Idioma: Español
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Descripción del Libro</h2>
          <p className="mb-4">
            <em>“¿A dónde vas, Pequeño Max?”</em> es un encantador cuento ilustrado para los más pequeños.
            Narra las aventuras de Max, un ratoncito curioso y valiente, que emprende un viaje lleno de
            descubrimientos, amabilidad y aprendizaje. Ideal para leer antes de dormir o en familia.
          </p>
          <p>
            A través de frases cortas, suaves ilustraciones y un lenguaje accesible, el libro enseña las
            primeras palabras y valores como la empatía, la curiosidad y la independencia.  
            Forma parte de la colección educativa <strong>Magic of Discoveries</strong>, dedicada a
            despertar la imaginación y la conexión emocional de los niños con el mundo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mensaje del Autor</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic">
            “Querido lector: Este libro es el primero de la serie <em>Pequeño Max</em>. 
            Fue creado con la intención de inspirar curiosidad y ternura. 
            Cada historia ayuda a los niños a ver el mundo como una aventura, 
            donde aprender y descubrir es parte de la magia de crecer.”  
            <br />— Ricardo Demi
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Opiniones de Lectores</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              “Una joya para pequeños exploradores. Mi hijo quedó encantado desde la primera página.” — Ekaterina Eliseeva García
            </li>
            <li>
              “Texto sencillo y evocador, ideal para niños en edad preescolar.” — Review de España
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Fuentes Oficiales</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/1963328469"
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
              "name": "¿A dónde vas, Pequeño Max?",
              "alternateName": "Where Have You Been, Little Max?",
              "author": { "@type": "Person", "name": "Ricardo Demi" },
              "publisher": { "@type": "Organization", "name": "Magic of Discoveries LLC" },
              "isbn": "978-1963328469",
              "inLanguage": "es",
              "alternateLanguage": "en",
              "bookFormat": "Paperback",
              "genre": ["Libros para niños", "Educativo", "Cuentos ilustrados"],
              "about": "Libro infantil ilustrado para niños de 1 a 3 años. Enseña empatía, curiosidad e independencia a través de la historia de un ratoncito llamado Max.",
              "datePublished": "2024-04-25",
              "numberOfPages": 28,
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Ekaterina Eliseeva García" },
                  "reviewBody": "Una joya para pequeños exploradores. Historia cálida, ilustraciones encantadoras y un mensaje profundo.",
                  "datePublished": "2024-05-21",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "2",
                "reviewCount": "2"
              },
              "mainEntityOfPage":
                "https://ricardo-demi-books.vercel.app/books/a-donde-vas-pequeno-max",
              "sameAs": [
                "https://www.amazon.com/dp/1963328469",
                "https://ricardo-demi-books.vercel.app/books/where-have-you-been-little-max"
              ]
            }),
          }}
        />
      </article>
    </main>
  );
}
