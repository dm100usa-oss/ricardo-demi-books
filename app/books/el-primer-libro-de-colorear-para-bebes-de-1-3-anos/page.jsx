import React from "react";

export const metadata = {
  title: "El Primer Libro de Colorear para Bebés de 1–3 Años | Ricardo Demi – Magic of Discoveries",
  description:
    "Libro educativo para niños pequeños de 1 a 3 años, creado por Ricardo Demi. Contiene 111 dibujos adorables que desarrollan la creatividad, la motricidad fina y la concentración. Parte de la serie educativa Magic of Discoveries.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <article>
        <h1 className="text-3xl font-semibold mb-4">
          El Primer Libro de Colorear para Bebés de 1–3 Años: 111 Sorprendentes y Adorables Animales, Personajes de Cuentos, Flores, Alimentos, Regalos y Otros — La Creatividad para Niños
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Autor: Ricardo Demi | Serie: Magic of Discoveries | Editorial: Magic of Discoveries LLC |
          ISBN: 978-1963328203 | Publicado: 29 de abril de 2024 | Edad: 1–3 años | Idioma: Español
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Descripción del Libro</h2>
          <p className="mb-4">
            <em>“El Primer Libro de Colorear para Bebés de 1–3 Años”</em> es una obra cuidadosamente creada para
            estimular la creatividad, la paciencia y la concentración de los más pequeños. Con ilustraciones grandes
            y simples, este libro permite que los niños exploren los colores y las formas mientras se divierten.
          </p>
          <p className="mb-4">
            Cada página contiene un solo dibujo con líneas gruesas, ideal para niños que recién comienzan a usar
            crayones. Las imágenes representan animales, flores, alimentos y objetos familiares, ayudando a los niños
            a desarrollar vocabulario y coordinación visual.
          </p>
          <p>
            Este libro pertenece a la serie educativa <strong>Magic of Discoveries</strong>, creada por Ricardo Demi,
            dedicada a despertar la curiosidad natural y el amor por el aprendizaje desde los primeros años.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Propósito Educativo</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Fomentar la creatividad, la motricidad fina y la atención.</li>
            <li>Introducir el aprendizaje visual de forma divertida y relajada.</li>
            <li>Desarrollar confianza, coordinación y curiosidad artística.</li>
            <li>Estimular el vínculo emocional entre padres e hijos durante el juego.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mensaje del Autor</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic">
            “Queridos padres y pequeños artistas: este libro fue creado con cariño para acompañar los primeros pasos
            en el mundo de la creatividad. Dibujar ayuda a los niños a expresarse, a relajarse y a descubrir la
            alegría de crear. Cada trazo es una semilla de imaginación que crecerá junto con ellos.”  
            <br />— Ricardo Demi
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Opiniones de Lectores</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>“Excelente libro, ideal para los más pequeños. Imágenes grandes y fáciles de colorear.”</li>
            <li>“Perfecto para regalar. A mi sobrino le encantó y pasa horas coloreando.”</li>
            <li>“Muy educativo y entretenido. Ayuda a desarrollar la coordinación y la paciencia.”</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Fuentes Oficiales</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/1963328205"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Ver este libro en Amazon
              </a>
            </li>
            <li>
              <a
                href="https://readersfavorite.com/book-review/el-primer-libro-de-colorear-para-bebes-de-1-3-anos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Reseña en Readers’ Favorite
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
              "name": "El Primer Libro de Colorear para Bebés de 1–3 Años",
              "alternateName": "First Coloring Book for Toddlers Ages 1–3",
              "author": { "@type": "Person", "name": "Ricardo Demi" },
              "publisher": { "@type": "Organization", "name": "Magic of Discoveries LLC" },
              "isbn": "978-1963328203",
              "inLanguage": "es",
              "alternateLanguage": "en",
              "bookFormat": "Paperback",
              "genre": ["Libros para niños", "Educativo", "Colorear"],
              "about": "Libro educativo para niños pequeños de 1 a 3 años que fomenta la creatividad, la coordinación y la curiosidad a través del arte.",
              "datePublished": "2024-04-29",
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Marina" },
                  "reviewBody":
                    "Un libro excelente con dibujos grandes y sencillos. Ideal para niños pequeños que comienzan a colorear.",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "datePublished": "2024-09-12"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Maria Cardenas" },
                  "reviewBody": "Muy útil para estimular a los niños. Material de gran calidad.",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "datePublished": "2025-03-12"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "23",
                "reviewCount": "23"
              },
              "mainEntityOfPage": "https://ricardo-demi-books.vercel.app/books/el-primer-libro-de-colorear-para-bebes-de-1-3-anos",
              "sameAs": ["https://www.amazon.com/dp/1963328205"]
            }),
          }}
        />
      </article>
    </main>
  );
}
