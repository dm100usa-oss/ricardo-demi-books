import "./globals.css";
import React from "react";
import SiteSchema from "./components/SiteSchema";
import { headers } from "next/headers";
import Masthead from "./components/Masthead";
import Footer from "./components/Footer";
import FooterES from "./components/FooterES";

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
  const pathname = headers().get("x-pathname") || "/";
  const isES = pathname === "/es" || pathname.startsWith("/es/");
  const lang = isES ? "es" : "en";

  return (
    <html lang={lang}>
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

        {/* Вторая метка Google. Их можно ставить несколько: каждая
            принадлежит своей учетной записи, и одна другой не мешает.
            Старую не трогаем, иначе тот, кто подтверждался по ней,
            потеряет доступ. */}
        <meta
          name="google-site-verification"
          content="UwCodO4uK-78rVX-3Jvtiqlm-H7NUU-iyOM9B9eRBZk"
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
          content="https://www.ricardo-demi.com/cover.jpg"
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
        <SiteSchema />
      </head>

      <body>
        <Masthead lang={lang} />

        {children}
        {isES ? <FooterES /> : <Footer />}
      </body>
    </html>
  );
}
