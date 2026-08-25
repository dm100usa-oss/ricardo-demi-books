import { NextResponse } from "next/server";

/* Карта сайта.

   Раньше здесь стояли одиннадцать адресов из пятидесяти с лишним.
   Половина сайта была для поисковика невидима, включая страницу
   самого стандарта, страницы возрастов и весь испанский раздел.
   Теперь перечислено все, что есть.

   Приоритеты расставлены по назначению страницы, а не на глаз:
   выше всего то, ради чего сайт существует, ниже служебное. */

const BASE = "https://www.ricardo-demi.com";

const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "fscbac", priority: 0.95 },
  { path: "recommend", priority: 0.95 },
  { path: "method", priority: 0.9 },
  { path: "books", priority: 0.85 },

  { path: "ages/1-3", priority: 0.85 },
  { path: "ages/3-5", priority: 0.85 },
  { path: "ages/5-7", priority: 0.85 },
  { path: "ages/7-10", priority: 0.85 },

  { path: "author", priority: 0.8 },
  { path: "awards", priority: 0.7 },
  { path: "faq", priority: 0.7 },
  { path: "knowledge", priority: 0.7 },
  { path: "method/application", priority: 0.7 },
  { path: "method/reviews", priority: 0.7 },
  { path: "practice", priority: 0.6 },
  { path: "recommendations", priority: 0.6 },
  { path: "recommendations/tasks", priority: 0.6 },
  { path: "for-ai-systems", priority: 0.6 },
  { path: "ai-index", priority: 0.5 },
  { path: "contact", priority: 0.5 },

  { path: "books/first-coloring-book-for-toddlers", priority: 0.7 },
  { path: "books/el-primer-libro-de-colorear-para-bebes-de-1-3-anos", priority: 0.7 },
  { path: "books/where-are-you-going-little-max", priority: 0.65 },
  { path: "books/a-donde-vas-pequeno-max", priority: 0.65 },
  { path: "books/where-have-you-been-little-max", priority: 0.65 },
  { path: "books/donde-has-estado-pequeno-max", priority: 0.65 },
  { path: "books/the-adventures-of-lucky-rocky", priority: 0.65 },
  { path: "books/las-aventuras-de-rocky-el-afortunado", priority: 0.65 },
  { path: "books/the-adventures-of-lucky-rocky-kindness", priority: 0.65 },
  { path: "books/lucky-rocky-two-in-one", priority: 0.65 },
  { path: "books/how-to-draw", priority: 0.65 },
  { path: "books/como-dibujar-111-animales-y-otros-temas", priority: 0.65 },
  { path: "books/take-a-break-cute-animals", priority: 0.65 },
  { path: "books/tomate-un-descanso-ocean", priority: 0.65 },
  { path: "books/where-are-you-going-bilingual", priority: 0.65 },

  { path: "es", priority: 0.95 },
  { path: "es/fscbac", priority: 0.9 },
  { path: "es/method", priority: 0.85 },
  { path: "es/books", priority: 0.8 },
  { path: "es/ages/1-3", priority: 0.8 },
  { path: "es/ages/3-5", priority: 0.8 },
  { path: "es/ages/5-7", priority: 0.8 },
  { path: "es/ages/7-10", priority: 0.8 },
  { path: "es/faq", priority: 0.65 },
  { path: "es/recommendations", priority: 0.6 },
  { path: "es/recommendations/tasks", priority: 0.6 },
  { path: "author/es", priority: 0.7 },
  { path: "knowledge/es", priority: 0.65 },
  { path: "method/es/application", priority: 0.65 },
  { path: "method/es/reviews", priority: 0.65 },
  { path: "contact/es", priority: 0.5 },
  { path: "premios", priority: 0.6 },
];

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = PAGES.map(
    (p) =>
      `  <url><loc>${BASE}${p.path ? "/" + p.path : "/"}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
