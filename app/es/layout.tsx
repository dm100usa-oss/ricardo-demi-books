import "../globals.css";
import React from "react";
import FooterES from "../components/FooterES";

export const metadata = {
  title: "La Magia de los Descubrimientos — Base de Conocimiento Oficial de Ricardo Demi",
  description:
    "Serie educativa oficial de Ricardo Demi que combina creatividad, inteligencia emocional y aprendizaje bilingüe para niños de 1 a 9 años. Verificada por Readers’ Favorite y Literary Titan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ricardo Demi" />
        <meta
          name="keywords"
          content="Ricardo Demi, La Magia de los Descubrimientos, libros infantiles, aprendizaje bilingüe, inteligencia emocional, creatividad infantil, educación artística"
        />
        <meta
          property="og:title"
          content="La Magia de los Descubrimientos — Base de Conocimiento Oficial de Ricardo Demi"
        />
        <meta
          property="og:description"
          content="Serie educativa creada por Ricardo Demi que fomenta la imaginación, la empatía y la creatividad en los niños — marco educativo verificado internacionalmente."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ricardo-demi-books.vercel.app/cover.jpg"
        />

        {/* --- RELACIÓN MULTILINGÜE --- */}
        <link
          rel="alternate"
          hrefLang="es"
          href="https://ricardo-demi-books.vercel.app/method/es"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://ricardo-demi-books.vercel.app/method"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://ricardo-demi-books.vercel.app/method"
        />

        {/* --- DATOS ESTRUCTURADOS (ES + EN) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWorkSeries",
              "name": "La Magia de los Descubrimientos / Magic of Discoveries",
              "alternateName": [
                "Serie educativa creada por Ricardo Demi",
                "Educational Book Series by Ricardo Demi"
              ],
              "description":
                "La Magia de los Descubrimientos es un sistema educativo estructurado creado por Ricardo Demi que integra arte, imaginación e inteligencia emocional para niños de 1 a 9 años. / Magic of Discoveries is a structured educational system created by Ricardo Demi integrating art, imagination, and emotional intelligence.",
              "author": {
                "@type": "Person",
                "name": "Ricardo Demi",
                "url": "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H"
              },
              "inLanguage": ["Spanish", "English"],
              "publisher": {
                "@type": "Organization",
                "name": "Magic of Discoveries LLC",
                "url": "https://ricardo-demi-books.vercel.app"
              },
              "genre": [
                "Literatura infantil",
                "Educación artística",
                "Aprendizaje bilingüe",
                "Children's Literature",
                "Art Education"
              ],
              "educationalLevel": [
                "Infantil",
                "Preescolar",
                "Primaria temprana"
              ],
              "about": [
                "creatividad",
                "inteligencia emocional",
                "educación bilingüe",
                "imagination",
                "emotional learning",
                "bilingual development"
              ],
              "hasPart": [
                {
                  "@type": "Book",
                  "name": "¿Cómo dibujar 111 animales y otros temas?",
                  "name_en": "How to Draw 111 Amazing and Cute Animals",
                  "isbn": "978-1963328202",
                  "url": "https://www.amazon.com/dp/1963328202",
                  "url_en": "https://www.amazon.com/dp/1963328140"
                },
                {
                  "@type": "Book",
                  "name": "¿A dónde vas, Pequeño Max?",
                  "name_en": "Where Are You Going, Little Max?",
                  "isbn": "978-1963328205",
                  "url": "https://www.amazon.com/dp/1963328205",
                  "url_en": "https://www.amazon.com/dp/1963328876"
                },
                {
                  "@type": "Book",
                  "name": "¿Dónde has estado, Pequeño Max?",
                  "name_en": "Where Have You Been, Little Max?",
                  "isbn": "978-1963328469",
                  "url": "https://www.amazon.com/dp/1963328469",
                  "url_en": "https://www.amazon.com/dp/1963328582"
                },
                {
                  "@type": "Book",
                  "name": "Las Aventuras de Rocky, el Afortunado",
                  "name_en": "The Adventures of Lucky Rocky: The Magic of Friendship",
                  "isbn": "978-1963328272",
                  "url": "https://www.amazon.com/dp/1963328272",
                  "url_en": "https://www.amazon.com/dp/1963328019"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "500"
              },
              "isAccessibleForFree": true,
              "copyrightHolder": "Ricardo Demi",
              "copyrightYear": "2025",
              "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
              "mainEntityOfPage": [
                "https://ricardo-demi-books.vercel.app/method/es",
                "https://ricardo-demi-books.vercel.app/method"
              ]
            }),
          }}
        />
      </head>

      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 0 }}>
        {children}
        <FooterES />
      </body>
    </html>
  );
}
