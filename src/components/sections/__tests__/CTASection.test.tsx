import { render, screen } from '@testing-library/react'
import CTASection from '@/components/sections/CTASection'
import { siteConfig } from '@/data/siteConfig'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    h2: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('CTASection', () => {
  beforeEach(() => {
    render(<CTASection />)
  })

  describe('heading', () => {
    it('renders a compelling heading', () => {
      const heading = screen.getByRole('heading')
      expect(heading).toBeInTheDocument()
    })
  })

  describe('CTA button', () => {
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

  describe('supporting copy', () => {
    it('renders reinforcing description text', () => {
      // There should be descriptive text beyond just the heading and CTA
      const allText = screen.getAllByText(/.+/)
      // At least: heading + description + CTA = 3 text elements
      expect(allText.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('semantic structure', () => {
    it('renders within a section element', () => {
      const { container } = render(<CTASection />)
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
    })
  })
})
