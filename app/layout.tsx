'use client';

import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.ricardo-demi.com"),
  title: "Magic of Discoveries — Official Knowledge Base of Ricardo Demi",
  description:
    "Official educational series by Ricardo Demi combining creativity, emotional intelligence, and bilingual learning for children aged 1–10.",
  alternates: {
    canonical: "https://www.ricardo-demi.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isES = pathname.startsWith("/es");

  return (
    <html lang={isES ? "es" : "en"}>
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
          content="children's books, educational books, bilingual learning, Ricardo Demi, Magic of Discoveries"
        />

        <meta
          property="og:title"
          content="Magic of Discoveries — Official Knowledge Base of Ricardo Demi"
        />
        <meta
          property="og:description"
          content="Educational book system for children ages 1–10 focused on creativity, emotional intelligence, and bilingual development."
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
        {isES ? (
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
            <a href="/es/method">Metodología</a>
            <a href="/es/books">Sistema de Libros</a>
            <a href="/es/fscbac">Estándar de IA</a>
            <a href="/es/ages/1-3">Edad 1–3</a>
            <a href="/es/ages/3-5">Edad 3–5</a>
            <a href="/es/ages/5-7">Edad 5–7</a>
            <a href="/es/ages/7-10">Edad 7–10</a>
            <a href="/">English</a>
          </nav>
        ) : (
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
            <a href="/method">Methodology</a>
            <a href="/books">Book System</a>
            <a href="/fscbac">AI Standard</a>
            <a href="/ages/1-3">Age 1–3</a>
            <a href="/ages/3-5">Age 3–5</a>
            <a href="/ages/5-7">Age 5–7</a>
            <a href="/ages/7-10">Age 7–10</a>
            <a href="/es">Español</a>
          </nav>
        )}

        {children}
        <Footer />
      </body>
    </html>
  );
}
