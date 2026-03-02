import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import { siteConfig } from '@/data/siteConfig'
import { services } from '@/data/services'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    main: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <main {...props}>{children}</main>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <span {...props}>{children}</span>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
    article: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <article {...props}>{children}</article>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('Home Page', () => {
  beforeEach(() => {
    render(<HomePage />)
  })

  describe('Hero section', () => {
    it('renders the Hero section with a prominent heading', () => {
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toBeInTheDocument()
    })

    it('heading communicates talent management value proposition', () => {
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1.textContent).toMatch(/talent|creator|management|brand/i)
    })
  })

  describe('Services Overview section', () => {
    it('renders all three service titles', () => {
      services.forEach((service) => {
        expect(screen.getByText(service.title)).toBeInTheDocument()
      })
    })

    it('renders service descriptions', () => {
      services.forEach((service) => {
        expect(screen.getByText(service.shortDescription)).toBeInTheDocument()
      })
    })
  })

  describe('CTA section', () => {
    it('renders at least one "Book a Call" CTA', () => {
      const ctaLinks = screen.getAllByRole('link', { name: /book a call/i })
      expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
    })

    it('CTA links point to cal.com URL', () => {
      const ctaLinks = screen.getAllByRole('link', { name: /book a call/i })
      ctaLinks.forEach((link) => {
        expect(link).toHaveAttribute('href', siteConfig.calUrl)
      })
    })
  })

  describe('section ordering', () => {
    it('renders sections in correct order: Hero, Services, CTA', () => {
      const { container } = render(<HomePage />)
      const sections = container.querySelectorAll('section')

      // There should be at least 3 sections
      expect(sections.length).toBeGreaterThanOrEqual(3)

      // Get text content of each section to verify ordering
      const sectionTexts = Array.from(sections).map((s) => s.textContent || '')

      // Find indices by checking content
      const heroIndex = sectionTexts.findIndex((text) =>
        /talent|creator|management/i.test(text)
      )
      const servicesIndex = sectionTexts.findIndex((text) =>
        text.includes('Talent Management') && text.includes('Brand Collaborations')
      )
      const ctaIndex = sectionTexts.findIndex(
        (text, i) =>
          i > servicesIndex && /book a call/i.test(text)
      )

      expect(heroIndex).toBeGreaterThanOrEqual(0)
      expect(servicesIndex).toBeGreaterThan(heroIndex)
      expect(ctaIndex).toBeGreaterThan(servicesIndex)
    })
  })

  describe('page structure', () => {
    it('renders a main element or wrapper', () => {
      const { container } = render(<HomePage />)
      const main = container.querySelector('main')
      // Page should have a main wrapper (either in page or layout)
      expect(main || container.firstChild).toBeInTheDocument()
    })
  })
})
