import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ricardo-demi-books.vercel.app'

  const pages = [
    '',
    'author',
    'awards',
    'books',
    'contact',
    'knowledge',
    'method',
    'method/application',
    'method/reviews',
    'premios',
    'es',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    changefreq: 'weekly',
    priority: page === '' ? 1.0 : 0.7,
  }))
}
