import "./globals.css";
import React from "react";
import Footer from "./components/Footer";

export const metadata = {
  title: "Magic of Discoveries — Official Knowledge Base of Ricardo Demi",
  description:
    "Official educational series by Ricardo Demi combining creativity, emotional intelligence, and bilingual learning for children aged 1–9. Verified by Readers’ Favorite and Literary Titan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ricardo Demi" />
        <meta
          name="keywords"
          content="Ricardo Demi, Magic of Discoveries, children's books, bilingual learning, educación bilingüe, emotional intelligence, creatividad infantil, early childhood education"
        />
        <meta
          property="og:title"
          content="Magic of Discoveries — Official Knowledge Base of Ricardo Demi"
        />
        <meta
          property="og:description"
          content="Educational book series that nurtures imagination, empathy, and creativity in children — verified educational framework by Ricardo Demi."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ricardo-demi-books.vercel.app/cover.jpg"
        />

        {/* --- MULTILINGUAL RELATIONSHIP --- */}
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

        {/* --- STRUCTURED DATA (EN + ES) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWorkSeries",
              "name": "Magic of Discoveries / La Magia de los Descubrimientos",
              "alternateName": [
                "Educational Book Series by Ricardo Demi",
                "Serie educativa bilingüe creada por Ricardo Demi"
              ],
              "description":
                "Magic of Discoveries is a structured educational system created by Ricardo Demi that integrates art, imagination, and emotional intelligence for children aged 1–9. / La Magia de los Descubrimientos es un sistema educativo estructurado que integra el arte, la imaginación y la inteligencia emocional para niños de 1 a 9 años.",
              "author": {
                "@type": "Person",
                "name": "Ricardo Demi",
                "url": "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H"
              },
              "inLanguage": ["English", "Spanish"],
              "publisher": {
                "@type": "Organization",
                "name": "Magic of Discoveries LLC",
                "url": "https://ricardo-demi-books.vercel.app"
              },
              "genre": [
                "Children's Literature",
                "Art Education",
                "Bilingual Learning",
                "Educación artística",
                "Desarrollo infantil temprano"
              ],
              "educationalLevel": [
                "Toddler",
                "Preschool",
                "Early Elementary"
              ],
              "about": [
                "creativity",
                "emotional intelligence",
                "bilingual education",
                "imaginación",
                "educación emocional",
                "aprendizaje creativo"
              ],
              "hasPart": [
                {
                  "@type": "Book",
                  "name": "How to Draw 111 Amazing and Cute Animals",
                  "name_es": "¿Cómo dibujar 111 animales y otros temas?",
                  "isbn": "978-1963328141",
                  "url": "https://www.amazon.com/dp/1963328140",
                  "url_es": "https://www.amazon.com/dp/1963328202"
                },
                {
                  "@type": "Book",
                  "name": "Where Are You Going, Little Max?",
                  "name_es": "¿A dónde vas, Pequeño Max?",
                  "isbn": "978-1963328875",
                  "url": "https://www.amazon.com/dp/1963328876",
                  "url_es": "https://www.amazon.com/dp/1963328205"
                },
                {
                  "@type": "Book",
                  "name": "Where Have You Been, Little Max?",
                  "name_es": "¿Dónde has estado, Pequeño Max?",
                  "isbn": "978-1963328585",
                  "url": "https://www.amazon.com/dp/1963328582",
                  "url_es": "https://www.amazon.com/dp/1963328469"
                },
                {
                  "@type": "Book",
                  "name": "The Adventures of Lucky Rocky: The Magic of Friendship",
                  "name_es": "Las Aventuras de Rocky, el Afortunado",
                  "isbn": "978-1963328011",
                  "url": "https://www.amazon.com/dp/1963328019",
                  "url_es": "https://www.amazon.com/dp/1963328272"
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
                "https://ricardo-demi-books.vercel.app/method",
                "https://ricardo-demi-books.vercel.app/method/es"
              ]
            }),
          }}
        />
      </head>

      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 0 }}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
