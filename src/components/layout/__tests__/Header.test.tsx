import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '@/components/layout/Header'
import { siteConfig } from '@/data/siteConfig'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    nav: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <nav {...props}>{children}</nav>,
    header: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <header {...props}>{children}</header>,
    button: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <button {...props}>{children}</button>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  describe('branding', () => {
    it('renders the DygoTalent logo or brand name', () => {
      expect(screen.getByText(/dygotalent/i)).toBeInTheDocument()
    })
  })

  describe('navigation links', () => {
    it('renders all navigation links from siteConfig', () => {
      siteConfig.navLinks.forEach((link) => {
        expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
      })
    })

    it('each nav link has the correct href', () => {
      siteConfig.navLinks.forEach((link) => {
        expect(screen.getByRole('link', { name: link.label })).toHaveAttribute(
          'href',
          link.href
        )
      })
    })

    it('renders Home link pointing to /', () => {
      expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    })

    it('renders About link pointing to /about', () => {
      expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    })

    it('renders Services link pointing to /services', () => {
      expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services')
    })

    it('renders Portfolio link pointing to /portfolio', () => {
      expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/portfolio')
    })

    it('renders Talent link pointing to /talent', () => {
      expect(screen.getByRole('link', { name: 'Talent' })).toHaveAttribute('href', '/talent')
    })

    it('renders Contact link pointing to /contact', () => {
      expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
    })
  })

  describe('CTA button', () => {
    it('renders a "Book a Call" CTA button', () => {
      expect(screen.getByRole('link', { name: /book a call/i })).toBeInTheDocument()
    })

    it('CTA links to the cal.com URL from siteConfig', () => {
      expect(screen.getByRole('link', { name: /book a call/i })).toHaveAttribute(
        'href',
        siteConfig.calUrl
      )
    })
  })

  describe('sticky positioning', () => {
    it('header has sticky or fixed positioning class', () => {
      const header = screen.getByRole('banner')
      const classList = header.className
      expect(classList).toMatch(/sticky|fixed/)
    })
  })

  describe('semantic HTML', () => {
    it('uses a nav element for navigation', () => {
      expect(screen.getByRole('navigation')).toBeInTheDocument()
    })

    it('uses a header/banner landmark', () => {
      expect(screen.getByRole('banner')).toBeInTheDocument()
    })
  })

  describe('mobile menu', () => {
    it('renders a mobile menu toggle button', () => {
      const menuButton = screen.getByRole('button', { name: /menu|toggle|navigation/i })
      expect(menuButton).toBeInTheDocument()
    })

    it('mobile menu toggle is interactive', async () => {
      const user = userEvent.setup()
      const menuButton = screen.getByRole('button', { name: /menu|toggle|navigation/i })
      await user.click(menuButton)
    })
  })
})
