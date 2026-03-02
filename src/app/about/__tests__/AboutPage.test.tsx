import { render, screen } from '@testing-library/react'
import AboutPage from '@/app/about/page'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h2 {...props}>{children}</h2>,
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

describe('About Page', () => {
  beforeEach(() => {
    render(<AboutPage />)
  })

  describe('main heading', () => {
    it('renders an H1 heading', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
    })

    it('heading relates to company story or mission', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toMatch(/about|story|mission|who we are|dygotalent/i)
    })
  })

  describe('company story and mission', () => {
    it('renders content about the company mission or story', () => {
      const pageText = document.body.textContent || ''
      expect(pageText).toMatch(/talent|creator|management|mission|story/i)
    })
  })

  describe('differentiators section', () => {
    it('renders a section about what makes DygoTalent different', () => {
      const allHeadings = screen.getAllByRole('heading')
      const differentiatorHeading = allHeadings.find((h) =>
        (h.textContent || '').match(/different|approach|why|unique|values|philosophy/i)
      )
      expect(differentiatorHeading).toBeTruthy()
    })
  })

  describe('values and philosophy', () => {
    it('includes empowerment messaging', () => {
      expect(document.body.textContent).toMatch(/empower/i)
    })

    it('includes authenticity messaging', () => {
      expect(document.body.textContent).toMatch(/authenti/i)
    })

    it('includes impact messaging', () => {
      expect(document.body.textContent).toMatch(/impact/i)
    })
  })

  describe('semantic structure', () => {
    it('uses section elements for content grouping', () => {
      const { container } = render(<AboutPage />)
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThanOrEqual(1)
    })

    it('has proper heading hierarchy with sub-headings', () => {
      const headings = screen.getAllByRole('heading')
      expect(headings.length).toBeGreaterThanOrEqual(2)
    })
  })
})
