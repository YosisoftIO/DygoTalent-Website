import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about', '/services', '/portfolio', '/talent', '/contact']

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
