import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about', '/team', '/services', '/portfolio', '/talent', '/contact']

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: '2026-03-05',
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
