import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateWebSiteSchema,
} from '@/lib/seo'
import { siteConfig } from '@/data/siteConfig'

describe('SEO Utilities', () => {
  describe('generateOrganizationSchema', () => {
    it('returns a valid Organization JSON-LD object', () => {
      const schema = generateOrganizationSchema()
      expect(schema).toBeDefined()
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Organization')
    })

    it('includes the correct organization name', () => {
      const schema = generateOrganizationSchema()
      expect(schema.name).toBe(siteConfig.name)
    })

    it('includes the correct organization URL', () => {
      const schema = generateOrganizationSchema()
      expect(schema.url).toBe(siteConfig.url)
    })

    it('includes the correct email', () => {
      const schema = generateOrganizationSchema()
      expect(schema.email).toBe(siteConfig.email)
    })

    it('includes social media profiles in sameAs', () => {
      const schema = generateOrganizationSchema()
      expect(schema.sameAs).toEqual(
        expect.arrayContaining([siteConfig.socials.instagram])
      )
    })
  })

  describe('generateBreadcrumbSchema', () => {
    const breadcrumbItems = [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ]

    it('returns a valid BreadcrumbList JSON-LD object', () => {
      const schema = generateBreadcrumbSchema(breadcrumbItems)
      expect(schema).toBeDefined()
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('BreadcrumbList')
    })

    it('contains the correct number of breadcrumb items', () => {
      const schema = generateBreadcrumbSchema(breadcrumbItems)
      expect(schema.itemListElement).toHaveLength(breadcrumbItems.length)
    })

    it('each breadcrumb item has correct position, name, and url', () => {
      const schema = generateBreadcrumbSchema(breadcrumbItems)
      schema.itemListElement.forEach(
        (item: { position: number; name: string; item: string }, index: number) => {
          expect(item.position).toBe(index + 1)
          expect(item.name).toBe(breadcrumbItems[index].name)
          expect(item.item).toContain(breadcrumbItems[index].url)
        }
      )
    })

    it('each breadcrumb item has @type ListItem', () => {
      const schema = generateBreadcrumbSchema(breadcrumbItems)
      schema.itemListElement.forEach(
        (item: { '@type': string }) => {
          expect(item['@type']).toBe('ListItem')
        }
      )
    })

    it('handles a single breadcrumb item', () => {
      const singleItem = [{ name: 'Home', url: '/' }]
      const schema = generateBreadcrumbSchema(singleItem)
      expect(schema.itemListElement).toHaveLength(1)
      expect(schema.itemListElement[0].position).toBe(1)
    })
  })

  describe('generateWebSiteSchema', () => {
    it('returns a valid WebSite JSON-LD object', () => {
      const schema = generateWebSiteSchema()
      expect(schema).toBeDefined()
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('WebSite')
    })

    it('includes the correct site name', () => {
      const schema = generateWebSiteSchema()
      expect(schema.name).toBe(siteConfig.name)
    })

    it('includes the correct site URL', () => {
      const schema = generateWebSiteSchema()
      expect(schema.url).toBe(siteConfig.url)
    })

    it('includes a SearchAction potential action', () => {
      const schema = generateWebSiteSchema()
      expect(schema.potentialAction).toBeDefined()
      expect(schema.potentialAction['@type']).toBe('SearchAction')
    })

    it('SearchAction has a valid target URL template', () => {
      const schema = generateWebSiteSchema()
      const { target } = schema.potentialAction
      expect(target).toContain(siteConfig.url)
      expect(target).toMatch(/\{.*\}/)
    })

    it('SearchAction has a query-input specification', () => {
      const schema = generateWebSiteSchema()
      expect(schema.potentialAction['query-input']).toBeDefined()
      expect(schema.potentialAction['query-input']).toContain('required')
    })
  })
})
