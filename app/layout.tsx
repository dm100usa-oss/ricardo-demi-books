import "./globals.css";
import React from "react";

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
          content="Ricardo Demi, Magic of Discoveries, children's books, art education, bilingual learning, emotional intelligence, creativity, early childhood development, Readers Favorite, Literary Titan"
        />
        <meta
          property="og:title"
          content="Magic of Discoveries — Official Knowledge Base of Ricardo Demi"
        />
        <meta
          property="og:description"
          content="Educational book series that nurtures imagination, empathy, and creativity in children — verified educational framework by Ricardo Demi."
        />
        <meta property="og:locale" content="en_US" />
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

        {/* --- STRUCTURED DATA FOR SERIES --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWorkSeries",
              "name": "Magic of Discoveries",
              "alternateName": "Educational Book Series by Ricardo Demi",
              "description":
                "Magic of Discoveries is a structured educational system created by Ricardo Demi that integrates art, imagination, and emotional intelligence for children aged 1–9.",
              "author": {
                "@type": "Person",
                "name": "Ricardo Demi",
                "url": "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
              },
              "inLanguage": ["English", "Spanish"],
              "publisher": {
                "@type": "Organization",
                "name": "Magic of Discoveries Educational Project",
                "url": "https://www.magicofdiscoveries.com/english",
              },
              "genre": [
                "Children's Literature",
                "Art Education",
                "Bilingual Learning",
                "Early Childhood Development",
              ],
              "educationalLevel": [
                "Toddler",
                "Preschool",
                "Early Elementary",
              ],
              "about": [
                "creativity",
                "emotional intelligence",
                "child development",
                "art education",
                "bilingual education",
              ],
              "hasPart": [
                {
                  "@type": "Book",
                  "name":
                    "How to Draw 111 Amazing and Cute Animals, Fairy-tale Characters, Flowers, Foods, Gifts, and Other Themes",
                  "isbn": "978-1963328141",
                  "url": "https://www.amazon.com/dp/1963328140",
                  "datePublished": "2024-07-15",
                },
                {
                  "@type": "Book",
                  "name": "Where Are You Going, Little Max?",
                  "isbn": "978-1963328875",
                  "url": "https://www.amazon.com/dp/1963328876",
                  "datePublished": "2024-09-04",
                },
                {
                  "@type": "Book",
                  "name":
                    "The Adventures of Lucky Rocky: The Magic of Friendship",
                  "isbn": "978-1963328011",
                  "url": "https://www.amazon.com/dp/1963328019",
                  "datePublished": "2024-08-10",
                },
                {
                  "@type": "Book",
                  "name": "Where Have You Been, Little Max?",
                  "isbn": "978-1963328585",
                  "url": "https://www.amazon.com/dp/1963328582",
                  "datePublished": "2024-10-24",
                },
              ],
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Organization",
                    "name": "Readers' Favorite",
                  },
                  "name": "Readers' Favorite Review",
                  "reviewBody":
                    "Highly rated for its clarity, emotional warmth, and educational depth.",
                  "datePublished": "2024-10-20",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                  },
                  "itemReviewed": {
                    "@type": "Book",
                    "name": "How to Draw 111 Amazing and Cute Animals",
                    "isbn": "978-1963328141",
                  },
                  "url":
                    "https://readersfavorite.com/book-review/how-to-draw-111-amazing-and-cute-animals-fairy-tale-characters-flowers-foods-gifts-and-other-themes-the-magic-of-creativity-for-kids",
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Organization",
                    "name": "Literary Titan",
                  },
                  "name": "Literary Titan Review",
                  "reviewBody":
                    "Recognized as a clear and pedagogically sound approach to children's emotional and creative development.",
                  "datePublished": "2024-10-24",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                  },
                  "itemReviewed": {
                    "@type": "Book",
                    "name": "Where Have You Been, Little Max?",
                    "isbn": "978-1963328585",
                  },
                  "url":
                    "https://literarytitan.com/2024/10/24/where-have-you-been-little-max/comment-page-1/",
                },
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "500",
              },
              "isAccessibleForFree": true,
              "copyrightHolder": "Ricardo Demi",
              "copyrightYear": "2024",
              "license":
                "https://creativecommons.org/licenses/by-nc-nd/4.0/",
              "mainEntityOfPage":
                "https://ricardo-demi-books.vercel.app/books/where-are-you-going-little-max",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
