import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://ricardo-demi-books.vercel.app";

  // Список основных статических страниц
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

  // Путь к папке с книгами
  const booksDir = path.join(process.cwd(), "app", "books");

  // Генерация ссылок на книги
  let bookUrls: string[] = [];
  try {
    const entries = fs.readdirSync(booksDir, { withFileTypes: true });
    bookUrls = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => `books/${entry.name}`);
  } catch (error) {
    console.error("Ошибка чтения папки books:", error);
  }

  // Объединяем всё в один список URL
  const allUrls = [...staticPages, ...bookUrls];

  // Генерация XML
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

  // ✅ Важно: правильный MIME-тип и кодировка
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
