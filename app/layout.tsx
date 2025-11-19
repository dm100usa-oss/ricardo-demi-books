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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Basic meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ricardo Demi" />

        {/* Bing Verification */}
        <meta
          name="msvalidate.01"
          content="7A3E245327DA485A41AE5DFAC5449599"
        />

        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="Rt1gDbfw5skme01n3RiGPBFYEXhr5FmpaBruJpTE6gY"
        />

        {/* SEO Keywords */}
        <meta
          name="keywords"
          content="children's books, educational books, bilingual learning, Ricardo Demi, Magic of Discoveries"
        />

        {/* OpenGraph */}
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

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 0 }}>
        {/* Language Switcher */}
        <div
          style={{
            padding: "12px 16px",
            textAlign: "right",
            fontSize: "14px",
          }}
        >
          <a href="/es" style={{ textDecoration: "none", color: "#444" }}>
            Español
          </a>
        </div>

        {/* Navigation */}
        <nav style={{ padding: "12px 16px", fontSize: "15px", lineHeight: "1.6" }}>
          <a href="/#methodology-block" style={{ marginRight: "16px", color: "#444" }}>
            Methodology
          </a>
          <a href="/#complete-system" style={{ marginRight: "16px", color: "#444" }}>
            Book System
          </a>
          <a href="/#age-1-3" style={{ marginRight: "16px", color: "#444" }}>
            Age 1–3
          </a>
          <a href="/#age-3-5" style={{ marginRight: "16px", color: "#444" }}>
            Age 3–5
          </a>
          <a href="/#age-5-7" style={{ marginRight: "16px", color: "#444" }}>
            Age 5–7
          </a>
          <a href="/#age-7-10" style={{ marginRight: "16px", color: "#444" }}>
            Age 7–10
          </a>
        </nav>

        {children}
        <Footer />
      </body>
    </html>
  );
}
