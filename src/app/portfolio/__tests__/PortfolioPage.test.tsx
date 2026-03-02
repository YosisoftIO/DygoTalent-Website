import { render, screen } from '@testing-library/react'
import PortfolioPage from '@/app/portfolio/page'
import { clients } from '@/data/clients'

// Mock next/image to render a plain img
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}))

// Mock next/link to render a plain anchor
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: React.PropsWithChildren<{ href: string }>) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

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
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('Portfolio Page', () => {
  beforeEach(() => {
    render(<PortfolioPage />)
  })

  describe('main heading', () => {
    it('renders an H1 heading', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
    })

    it('heading relates to portfolio or brands', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toMatch(/portfolio|brands|clients|work/i)
    })
  })

  describe('introductory text', () => {
    it('renders introductory text about brands or partnerships', () => {
      const pageText = document.body.textContent || ''
      expect(pageText).toMatch(/brands|worked with|partners|clients/i)
    })
  })

  describe('client logo grid', () => {
    it('renders images for clients', () => {
      const images = screen.getAllByRole('img')
      expect(images.length).toBeGreaterThanOrEqual(clients.length)
    })

    it('renders an image for each client in the data', () => {
      clients.forEach((client) => {
        const img = screen.getByAltText(new RegExp(client.name, 'i'))
        expect(img).toBeInTheDocument()
      })
    })

    it('client images have descriptive alt text containing client name', () => {
      const images = screen.getAllByRole('img')
      const clientImages = images.filter((img) =>
        clients.some((client) =>
          (img.getAttribute('alt') || '').toLowerCase().includes(client.name.toLowerCase())
        )
      )
      expect(clientImages.length).toBe(clients.length)
    })

    it('client images have src attributes', () => {
      clients.forEach((client) => {
        const img = screen.getByAltText(new RegExp(client.name, 'i'))
        expect(img).toHaveAttribute('src')
      })
    })
  })

  describe('grayscale treatment', () => {
    it('applies grayscale styling to client images by default', () => {
      const images = screen.getAllByRole('img')
      const clientImages = images.filter((img) =>
        clients.some((client) =>
          (img.getAttribute('alt') || '').toLowerCase().includes(client.name.toLowerCase())
        )
      )
      // Check that at least one image or its parent has grayscale styling
      const hasGrayscale = clientImages.some((img) => {
        const style = img.getAttribute('style') || ''
        const className = img.className || ''
        const parentClassName = img.parentElement?.className || ''
        return (
          style.includes('grayscale') ||
          className.includes('grayscale') ||
          parentClassName.includes('grayscale') ||
          style.includes('filter')
        )
      })
      expect(hasGrayscale).toBe(true)
    })
  })

  describe('semantic structure', () => {
    it('uses section or main elements for content grouping', () => {
      const { container } = render(<PortfolioPage />)
      const sections = container.querySelectorAll('section, main')
      expect(sections.length).toBeGreaterThanOrEqual(1)
    })

    it('has proper heading hierarchy', () => {
      const headings = screen.getAllByRole('heading')
      expect(headings.length).toBeGreaterThanOrEqual(1)
      expect(headings[0].tagName).toBe('H1')
    })
  })
})
