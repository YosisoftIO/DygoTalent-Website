import { render, screen } from '@testing-library/react'
import ServicesOverview from '@/components/sections/ServicesOverview'
import { services } from '@/data/services'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    h2: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    article: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <article {...props}>{children}</article>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('ServicesOverview Section', () => {
  beforeEach(() => {
    render(<ServicesOverview />)
  })

  describe('section heading', () => {
    it('renders a section heading', () => {
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
    })
  })

  describe('service cards', () => {
    it('renders exactly 3 service cards', () => {
      const titles = services.map((s) => s.title)
      titles.forEach((title) => {
        expect(screen.getByText(title)).toBeInTheDocument()
      })
      // Verify there are exactly 3 service titles rendered
      expect(titles).toHaveLength(3)
    })

    it('renders the Talent Management card', () => {
      expect(screen.getByText('Talent Management')).toBeInTheDocument()
    })

    it('renders the Brand Collaborations card', () => {
      expect(screen.getByText('Brand Collaborations')).toBeInTheDocument()
    })

    it('renders the Growth Advisory card', () => {
      expect(screen.getByText('Growth Advisory')).toBeInTheDocument()
    })

    it('each card displays its short description', () => {
      services.forEach((service) => {
        expect(screen.getByText(service.shortDescription)).toBeInTheDocument()
      })
    })
  })

  describe('card structure', () => {
    it('each service has a heading (h3 or similar)', () => {
      const subheadings = screen.getAllByRole('heading', { level: 3 })
      expect(subheadings).toHaveLength(3)
    })

    it('cards have an icon area or visual element', () => {
      // Icon areas should have some visual indicator — svg, img, or element with role
      const { container } = render(<ServicesOverview />)
      // Each card should have some kind of icon element (svg, img, or span with icon class)
      const iconElements = container.querySelectorAll('svg, img, [data-testid*="icon"], [class*="icon"]')
      expect(iconElements.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe('semantic structure', () => {
    it('renders within a section element', () => {
      const { container } = render(<ServicesOverview />)
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
    })
  })
})
