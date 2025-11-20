import "../globals.css";
import React from "react";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://ricardo-demi-books.vercel.app/es"),
  title: "Magic of Discoveries — Base Oficial de Conocimiento de Ricardo Demi",
  description:
    "Serie educativa oficial de Ricardo Demi que combina creatividad, inteligencia emocional y aprendizaje bilingüe para niños de 1 a 10 años.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/es",
  },
};

export default function RootLayoutES({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >

        {/* TOP NAVIGATION */}
        <nav
          style={{
            backgroundColor: "#f5f5f5",
            padding: "14px 16px",
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "22px",
            color: "#333",
            fontWeight: 500,
            borderBottom: "1px solid #ddd",
          }}
        >
          <a
            href="/es#methodology-block"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Metodología
          </a>

          <a
            href="/es#complete-system"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Sistema de Libros
          </a>

          <a
            href="/es#age-1-3"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Edad 1–3
          </a>

          <a
            href="/es#age-3-5"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Edad 3–5
          </a>

          <a
            href="/es#age-5-7"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Edad 5–7
          </a>

          <a
            href="/es#age-7-10"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Edad 7–10
          </a>

          {/* ONLY ENGLISH HERE */}
          <a href="/" style={{ color: "#333", textDecoration: "none" }}>
            English&nbsp;&nbsp;🇺🇸
          </a>
        </nav>

        {children}
        <Footer />
      </body>
    </html>
  );
}
