import { render, screen } from '@testing-library/react'
import ServicesPage from '@/app/services/page'
import { services } from '@/data/services'
import { siteConfig } from '@/data/siteConfig'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <span {...props}>{children}</span>,
    ul: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <li {...props}>{children}</li>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('Services Page', () => {
  beforeEach(() => {
    render(<ServicesPage />)
  })

  describe('main heading', () => {
    it('renders an H1 heading', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
    })

    it('heading relates to services', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toMatch(/service/i)
    })
  })

  describe('service sections', () => {
    it('renders all three service titles', () => {
      services.forEach((service) => {
        expect(screen.getByText(service.title)).toBeInTheDocument()
      })
    })

    it('renders Talent Management section', () => {
      expect(screen.getByText('Talent Management')).toBeInTheDocument()
    })

    it('renders Brand Collaborations section', () => {
      expect(screen.getByText('Brand Collaborations')).toBeInTheDocument()
    })

    it('renders Growth Advisory section', () => {
      expect(screen.getByText('Growth Advisory')).toBeInTheDocument()
    })
  })

  describe('service includes lists', () => {
    it.each(services)('renders includes items for $title', (service) => {
      service.includes.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument()
      })
    })
  })

  describe('service forWho text', () => {
    it.each(services)('renders forWho text for $title', (service) => {
      expect(screen.getByText(service.forWho)).toBeInTheDocument()
    })
  })

  describe('service CTAs', () => {
    it('renders "Book a Call" links', () => {
      const ctaLinks = screen.getAllByRole('link', { name: /book a call/i })
      expect(ctaLinks.length).toBeGreaterThanOrEqual(services.length)
    })

    it('all "Book a Call" links point to cal.com URL', () => {
      const ctaLinks = screen.getAllByRole('link', { name: /book a call/i })
      ctaLinks.forEach((link) => {
        expect(link).toHaveAttribute('href', siteConfig.calUrl)
      })
    })
  })

  describe('heading hierarchy', () => {
    it('has a single H1 for the page title', () => {
      const h1s = screen.getAllByRole('heading', { level: 1 })
      expect(h1s).toHaveLength(1)
    })

    it('has H2 headings for each service', () => {
      const h2s = screen.getAllByRole('heading', { level: 2 })
      const h2Texts = h2s.map((h) => h.textContent)
      services.forEach((service) => {
        expect(h2Texts).toContain(service.title)
      })
    })
  })
})
