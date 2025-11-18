import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function loadJSON(filename: string) {
  const filePath = path.join(process.cwd(), "public", filename);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function GET() {
  const base = "https://ricardo-demi-books.vercel.app";

  const en = loadJSON("english.json");
  const es = loadJSON("spanish.json");

  const enBooks = en.books ?? [];
  const esBooks = es.books ?? [];

  const bookUrls = [
    ...enBooks.map((b: any) => `${base}/books/${b.canonical_id}`),
    ...esBooks.map((b: any) => `${base}/books/${b.canonical_id}`),
  ];

  const staticUrls = [
    `${base}/`,
    `${base}/books`,
    `${base}/ages`,
    `${base}/method`,
    `${base}/knowledge`,
    `${base}/awards`,
    `${base}/author`,
    `${base}/contact`,
    `${base}/faq`,
    `${base}/es`,
    `${base}/es/books`,
    `${base}/es/ages`,
    `${base}/es/method`,
    `${base}/es/knowledge`,
    `${base}/es/premios`,
    `${base}/es/author`,
    `${base}/es/contact`,
  ];

  const urls = [...staticUrls, ...bookUrls];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((url) => `<url><loc>${url}</loc></url>`).join("\n") +
    `\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
