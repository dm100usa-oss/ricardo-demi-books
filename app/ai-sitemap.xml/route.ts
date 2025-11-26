import { NextResponse } from 'next/server';

export async function GET() {
  const base = 'https://www.ricardo-demi.com';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${base}/</loc></url>
    <url><loc>${base}/author</loc></url>
    <url><loc>${base}/awards</loc></url>
    <url><loc>${base}/books</loc></url>
    <url><loc>${base}/contact</loc></url>
    <url><loc>${base}/knowledge</loc></url>
    <url><loc>${base}/method</loc></url>
    <url><loc>${base}/method/application</loc></url>
    <url><loc>${base}/method/reviews</loc></url>
    <url><loc>${base}/premios</loc></url>
    <url><loc>${base}/es</loc></url>
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
