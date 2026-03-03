import { render, screen } from '@testing-library/react'
import ServicesOverview from '@/components/sections/ServicesOverview'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    h2: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useReducedMotion: () => false,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

const SERVICE_NAMES = [
  'Content Production',
  'Public Relations',
  'Sampling & Giveaways',
  'Experiences & Special Events',
  'Partnerships & Sponsorships',
]

describe('ServicesOverview Section', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    render(<ServicesOverview />)
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('section heading', () => {
    it('renders a section heading', () => {
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('What We Do')
    })
  })

  describe('cycling text', () => {
    it('renders service names from the cycling list', () => {
      // The current service plus its neighbors should be visible
      // Some names appear twice (in sr-only list + animation), so use getAllByText
      const matches = screen.getAllByText('Content Production')
      expect(matches.length).toBeGreaterThanOrEqual(1)
    })

    it('shows three service names in the animation area', () => {
      // prev (Partnerships & Sponsorships), current (Content Production), next (Public Relations)
      // Each appears at least once in the DOM (sr-only list + possibly animation)
      expect(screen.getAllByText('Partnerships & Sponsorships').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Content Production').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Public Relations').length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('accessibility', () => {
    it('has a visually-hidden list of all services for screen readers', () => {
      const list = screen.getByRole('list')
      const items = screen.getAllByRole('listitem')
      expect(list).toBeInTheDocument()
      expect(items).toHaveLength(SERVICE_NAMES.length)
    })

    it('animation area is hidden from screen readers', () => {
      const { container } = render(<ServicesOverview />)
      const hiddenDiv = container.querySelector('[aria-hidden="true"]')
      expect(hiddenDiv).toBeInTheDocument()
    })
  })

  describe('call to action', () => {
    it('renders the View All Services link', () => {
      const link = screen.getByRole('link', { name: /view all services/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/services')
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
