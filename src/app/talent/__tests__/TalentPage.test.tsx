import { render, screen, within } from '@testing-library/react'
import TalentPage from '@/app/talent/page'
import { creators, niches } from '@/data/creators'

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
    h3: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <span {...props}>{children}</span>,
    ul: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <li {...props}>{children}</li>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
    button: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('Talent Roster Page', () => {
  beforeEach(() => {
    render(<TalentPage />)
  })

  describe('main heading', () => {
    it('renders an H1 heading', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
    })

    it('heading relates to talent or creators', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toMatch(/talent|roster|creator|influencer/i)
    })
  })

  describe('creator cards', () => {
    it('renders one card per creator in the data', () => {
      creators.forEach((creator) => {
        expect(screen.getByText(creator.name)).toBeInTheDocument()
      })
    })

    it('each card shows the creator name', () => {
      creators.forEach((creator) => {
        const nameEl = screen.getByText(creator.name)
        expect(nameEl).toBeInTheDocument()
      })
    })

    it('each card shows the creator niche/category', () => {
      creators.forEach((creator) => {
        const nicheEl = screen.getByText(new RegExp(creator.niche, 'i'))
        expect(nicheEl).toBeInTheDocument()
      })
    })

    it('each card has a creator photo', () => {
      creators.forEach((creator) => {
        const img = screen.getByAltText(new RegExp(creator.name, 'i'))
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute('src')
      })
    })
  })

  describe('social media links', () => {
    it('renders social media links for creators with socials', () => {
      const links = screen.getAllByRole('link')
      const socialLinks = links.filter((link) => {
        const href = link.getAttribute('href') || ''
        return (
          href.includes('instagram') ||
          href.includes('youtube') ||
          href.includes('twitter') ||
          href.includes('x.com') ||
          href === '#'
        )
      })
      expect(socialLinks.length).toBeGreaterThanOrEqual(1)
    })

    it('social links open in a new tab', () => {
      const links = screen.getAllByRole('link')
      const socialLinks = links.filter((link) => {
        const href = link.getAttribute('href') || ''
        return (
          href.includes('instagram') ||
          href.includes('youtube') ||
          href.includes('twitter') ||
          href.includes('x.com') ||
          href === '#'
        )
      })
      socialLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank')
      })
    })

    it('social links have rel="noopener noreferrer" for security', () => {
      const links = screen.getAllByRole('link')
      const socialLinks = links.filter((link) => {
        const href = link.getAttribute('href') || ''
        return (
          href.includes('instagram') ||
          href.includes('youtube') ||
          href.includes('twitter') ||
          href.includes('x.com') ||
          href === '#'
        )
      })
      socialLinks.forEach((link) => {
        const rel = link.getAttribute('rel') || ''
        expect(rel).toContain('noopener')
      })
    })
  })

  describe('niche filter (optional)', () => {
    it('may render filter buttons or tabs for niches', () => {
      const buttons = screen.queryAllByRole('button')
      const nicheButtons = buttons.filter((btn) =>
        niches.some((niche) =>
          (btn.textContent || '').toLowerCase().includes(niche.toLowerCase())
        )
      )
      // This is optional per requirements, so we just verify it doesn't break
      // If niche filters are present, they should match the niches data
      if (nicheButtons.length > 0) {
        expect(nicheButtons.length).toBeGreaterThanOrEqual(2)
      }
    })
  })

  describe('semantic structure', () => {
    it('uses section or main elements for content grouping', () => {
      const { container } = render(<TalentPage />)
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
