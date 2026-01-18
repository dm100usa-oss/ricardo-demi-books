import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.ricardo-demi.com";

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

  const urls = staticPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>${page === "" ? "1.0" : "0.7"}</priority>
    </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
