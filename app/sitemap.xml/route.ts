import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://ricardo-demi-books.vercel.app/</loc>
    </url>
    <url>
      <loc>https://ricardo-demi-books.vercel.app/author</loc>
    </url>
    <url>
      <loc>https://ricardo-demi-books.vercel.app/method</loc>
    </url>
    <url>
      <loc>https://ricardo-demi-books.vercel.app/method/application</loc>
    </url>
    <url>
      <loc>https://ricardo-demi-books.vercel.app/method/reviews</loc>
    </url>
    <url>
      <loc>https://ricardo-demi-books.vercel.app/contact</loc>
    </url>
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
