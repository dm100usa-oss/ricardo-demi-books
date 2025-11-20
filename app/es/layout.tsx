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
        {/* Top Navigation */}
        <nav
          style={{
            backgroundColor: "#f5f5f5",
            padding: "12px 16px",
            textAlign: "center",
            fontSize: "15px",
            lineHeight: "1.6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            borderBottom: "1px solid #e0e0e0",
            color: "#444",
          }}
        >
          {/* Language switcher */}
          <a href="/" style={{ color: "#444" }}>
            English 🇺🇸
          </a>

          <a href="/es#methodology-block" style={{ color: "#444" }}>
            Metodología
          </a>
          <a href="/es#complete-system" style={{ color: "#444" }}>
            Sistema de Libros
          </a>
          <a href="/es#age-1-3" style={{ color: "#444" }}>
            Edad 1–3
          </a>
          <a href="/es#age-3-5" style={{ color: "#444" }}>
            Edad 3–5
          </a>
          <a href="/es#age-5-7" style={{ color: "#444" }}>
            Edad 5–7
          </a>
          <a href="/es#age-7-10" style={{ color: "#444" }}>
            Edad 7–10
          </a>

          <span style={{ color: "#444" }}>Español 🇪🇸</span>
        </nav>

        {children}
        <Footer />
      </body>
    </html>
  );
}
