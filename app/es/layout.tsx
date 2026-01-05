import "./globals.css";
import React from "react";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.ricardo-demi.com"),
  title: "Magic of Discoveries — Base Oficial de Conocimiento de Ricardo Demi",
  description:
    "Serie educativa oficial de Ricardo Demi que combina creatividad, inteligencia emocional y aprendizaje bilingüe para niños de 1 a 10 años.",
  alternates: {
    canonical: "https://www.ricardo-demi.com/es",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ricardo Demi" />

        <meta
          name="msvalidate.01"
          content="7A3E245327DA485A41AE5DFAC5449599"
        />

        <meta
          name="google-site-verification"
          content="D_yiTSM0zWdBs-hpefX9cotH2U5FSStgcb1W-XOwTgw"
        />

        <meta
          name="keywords"
          content="libros infantiles, libros educativos, aprendizaje bilingüe, Ricardo Demi, Magic of Discoveries"
        />

        <meta
          property="og:title"
          content="Magic of Discoveries — Base Oficial de Conocimiento de Ricardo Demi"
        />
        <meta
          property="og:description"
          content="Sistema educativo de libros infantiles para edades 1–10 enfocado en creatividad, inteligencia emocional y desarrollo bilingüe."
        />
        <meta
          property="og:image"
          content="https://ricardo-demi-books.vercel.app/cover.jpg"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "0a2c9e4a59fb4c859f3d5d3c9ddc24f1"}'
        ></script>
      </head>

      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <nav
          style={{
            backgroundColor: "#f5f5f5",
            padding: "14px 16px",
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "22px",
            fontWeight: 500,
            borderBottom: "1px solid #ddd",
          }}
        >
          <a href="/es/method" style={{ textDecoration: "none" }}>
            Metodología
          </a>

          <a href="/es/books" style={{ textDecoration: "none" }}>
            Sistema de Libros
          </a>

          <a
            href="https://www.ricardo-demi.com/es/fscbac"
            style={{ textDecoration: "none" }}
          >
            Estándar de IA
          </a>

          <a href="/es/ages/1-3" style={{ textDecoration: "none" }}>
            Edad 1–3
          </a>

          <a href="/es/ages/3-5" style={{ textDecoration: "none" }}>
            Edad 3–5
          </a>

          <a href="/es/ages/5-7" style={{ textDecoration: "none" }}>
            Edad 5–7
          </a>

          <a href="/es/ages/7-10" style={{ textDecoration: "none" }}>
            Edad 7–10
          </a>

          <a href="/" style={{ textDecoration: "none" }}>
            English
          </a>
        </nav>

        {children}
        <Footer />
      </body>
    </html>
  );
}
