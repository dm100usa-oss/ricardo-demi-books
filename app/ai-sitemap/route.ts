import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooksData() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export function GET() {
  const books = getBooksData();

  const base = "https://ricardo-demi-books.vercel.app";

  const urls = [
    `${base}/`,
    `${base}/books`,
    `${base}/ai-index`,
    ...books.map((b) => `${base}/books/${b.id}`)
  ];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((url) => {
        return `<url><loc>${url}</loc></url>`;
      })
      .join("\n") +
    `\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
