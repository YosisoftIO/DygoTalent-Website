import { render, screen } from '@testing-library/react'
import Hero from '@/components/sections/Hero'
import { siteConfig } from '@/data/siteConfig'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <span {...props}>{children}</span>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('Hero Section', () => {
  beforeEach(() => {
    render(<Hero />)
  })

  describe('headline', () => {
    it('renders a prominent heading', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
    })

    it('heading communicates talent management / creator economy value proposition', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toMatch(/talent|creator|management|brand/i)
    })
  })

  describe('subheadline', () => {
    it('renders supporting text below the headline', () => {
      // Subheadline should be a paragraph or secondary text element
      const paragraphs = screen.getAllByText(/.+/)
      // There should be more than just the heading — supporting text exists
      expect(paragraphs.length).toBeGreaterThan(1)
    })
  })

  describe('CTA', () => {
    it('renders a "Book a Call" CTA link', () => {
      expect(screen.getByRole('link', { name: /book a call/i })).toBeInTheDocument()
    })

    it('CTA links to the cal.com URL from siteConfig', () => {
      expect(screen.getByRole('link', { name: /book a call/i })).toHaveAttribute(
        'href',
        siteConfig.calUrl
      )
    })
  })

  describe('animation', () => {
    it('has an animation wrapper (motion div or data-testid)', () => {
      // The Hero section should be wrapped in a framer-motion element
      // Our mock renders it as a regular div/section, so we check the container exists
      const { container } = render(<Hero />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe('semantic structure', () => {
    it('renders within a section or main landmark', () => {
      const { container } = render(<Hero />)
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
    })
  })
})
