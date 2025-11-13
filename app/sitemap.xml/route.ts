import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://ricardo-demi-books.vercel.app";

  const staticPages = [
    "",
    "author",
    "awards",
    "books",
    "contact",
    "knowledge",
    "method",
    "method/application",
    "method/reviews",
    "premios",
    "es",
  ];

  const booksDir = path.join(process.cwd(), "app", "books");
  let bookUrls: string[] = [];

  try {
    const entries = fs.readdirSync(booksDir, { withFileTypes: true });
    bookUrls = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => `books/${entry.name}`);
  } catch (error) {
    console.error("Error reading books directory:", error);
  }

  const allUrls = [...staticPages, ...bookUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}/${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>${url === "" ? "1.0" : "0.7"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
