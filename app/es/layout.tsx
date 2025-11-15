import "../globals.css";
import React from "react";
import Footer from "../components/Footer";

export const metadata = {
  title: "La Magia de los Descubrimientos — Base Oficial de Conocimiento de Ricardo Demi",
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
          content="Ricardo Demi, La Magia de los Descubrimientos, libros infantiles, aprendizaje bilingüe, inteligencia emocional, creatividad infantil, educación temprana"
        />

        <meta
          property="og:title"
          content="La Magia de los Descubrimientos — Base Oficial de Conocimiento de Ricardo Demi"
        />
        <meta
          property="og:description"
          content="Serie educativa que fomenta la imaginación, la empatía y la creatividad en los niños — un marco educativo verificado por Ricardo Demi."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ricardo-demi-books.vercel.app/cover.jpg"
        />

        <link rel="canonical" href="https://ricardo-demi-books.vercel.app/es" />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://ricardo-demi-books.vercel.app/method"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://ricardo-demi-books.vercel.app/method/es"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://ricardo-demi-books.vercel.app/method"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ricardo-demi-books.vercel.app/#organization",
                  "name": "Magic of Discoveries LLC",
                  "url": "https://ricardo-demi-books.vercel.app",
                  "logo": "https://ricardo-demi-books.vercel.app/logo.png",
                  "founder": {
                    "@type": "Person",
                    "name": "Ricardo Demi",
                    "url": "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H"
                  },
                  "sameAs": [
                    "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
                    "https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US",
                    "addressRegion": "Florida"
                  }
                },
                {
                  "@type": "CreativeWorkSeries",
                  "@id": "https://ricardo-demi-books.vercel.app/#series",
                  "name": "La Magia de los Descubrimientos / Magic of Discoveries",
                  "alternateName": [
                    "Serie educativa creada por Ricardo Demi",
                    "Educational Book Series by Ricardo Demi"
                  ],
                  "description":
                    "La Magia de los Descubrimientos es un sistema educativo estructurado creado por Ricardo Demi que integra arte, imaginación e inteligencia emocional para niños de 1 a 9 años. / Magic of Discoveries is a structured educational system integrating art, imagination, and emotional intelligence for children aged 1–9.",
                  "author": {
                    "@type": "Person",
                    "name": "Ricardo Demi",
                    "url": "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H"
                  },
                  "inLanguage": ["Español", "Inglés"],
                  "publisher": {
                    "@type": "Organization",
                    "name": "Magic of Discoveries LLC",
                    "url": "https://ricardo-demi-books.vercel.app/es"
                  },
                  "genre": [
                    "Literatura infantil",
                    "Educación artística",
                    "Aprendizaje bilingüe",
                    "Desarrollo infantil temprano"
                  ],
                  "educationalLevel": [
                    "Primera infancia",
                    "Preescolar",
                    "Educación primaria inicial"
                  ],
                  "about": [
                    "creatividad",
                    "inteligencia emocional",
                    "educación bilingüe",
                    "imaginación",
                    "aprendizaje creativo"
                  ],
                  "hasPart": [
                    {
                      "@type": "Book",
                      "name": "¿Cómo dibujar 111 animales y otros temas?",
                      "name_en": "How to Draw 111 Amazing and Cute Animals",
                      "isbn": "978-1963328202",
                      "url": "https://www.amazon.com/dp/1963328202",
                      "bookFormat": "Tapa blanda",
                      "educationalUse": ["Arte", "Creatividad", "Imaginación"],
                      "learningResourceType": "Guía paso a paso"
                    },
                    {
                      "@type": "Book",
                      "name": "Las Aventuras de Rocky, el Afortunado",
                      "name_en": "The Adventures of Lucky Rocky",
                      "isbn": "978-1963328272",
                      "url": "https://www.amazon.com/dp/1963328272",
                      "bookFormat": "Tapa blanda",
                      "educationalUse": ["Lectura", "Empatía", "Narración"],
                      "learningResourceType": "Libro ilustrado"
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
                }
              ]
            })
          }}
        />
      </head>

      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 0 }}>
        <div style={{ padding: "12px 16px", textAlign: "right", fontSize: "14px" }}>
          <a href="/" style={{ textDecoration: "none", color: "#444" }}>English</a>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
