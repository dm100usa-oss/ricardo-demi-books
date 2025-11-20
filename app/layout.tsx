import "./globals.css";
import React from "react";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://ricardo-demi-books.vercel.app"),
  title: "Magic of Discoveries — Official Knowledge Base of Ricardo Demi",
  description:
    "Official educational series by Ricardo Demi combining creativity, emotional intelligence, and bilingual learning for children aged 1–10.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ricardo Demi" />

        <meta
          name="msvalidate.01"
          content="7A3E245327DA485A41AE5DFAC5449599"
        />

        <meta
          name="google-site-verification"
          content="Rt1gDbfw5skme01n3RiGPBFYEXhr5FmpaBruJpTE6gY"
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
      </head>

      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Top Navigation with background */}
        <nav
          style={{
            backgroundColor: "#f5f5f5",
            padding: "12px 16px",
            textAlign: "center",
            fontSize: "15px",
            lineHeight: "1.6",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <a href="/#methodology-block" style={{ color: "#444" }}>
            Methodology
          </a>
          <a href="/#complete-system" style={{ color: "#444" }}>
            Book System
          </a>
          <a href="/#age-1-3" style={{ color: "#444" }}>
            Age 1–3
          </a>
          <a href="/#age-3-5" style={{ color: "#444" }}>
            Age 3–5
          </a>
          <a href="/#age-5-7" style={{ color: "#444" }}>
            Age 5–7
          </a>
          <a href="/#age-7-10" style={{ color: "#444" }}>
            Age 7–10
          </a>
          <a href="/es" style={{ marginLeft: "16px", color: "#444" }}>
            Español 🇪🇸
          </a>
        </nav>

        {children}
        <Footer />
      </body>
    </html>
  );
}
