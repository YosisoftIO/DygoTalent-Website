import { render, screen } from '@testing-library/react'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/data/siteConfig'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    footer: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <footer {...props}>{children}</footer>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  describe('branding', () => {
    it('renders the DygoTalent logo or brand name as a link', () => {
      const brand = screen.getByRole('link', { name: 'DygoTalent' })
      expect(brand).toBeInTheDocument()
      expect(brand).toHaveAttribute('href', '/')
    })
  })

  describe('navigation links', () => {
    it('renders navigation links matching siteConfig.navLinks', () => {
      siteConfig.navLinks.forEach((link) => {
        const links = screen.getAllByRole('link', { name: link.label })
        expect(links.length).toBeGreaterThanOrEqual(1)
      })
    })

    it('nav links have correct hrefs', () => {
      siteConfig.navLinks.forEach((link) => {
        const links = screen.getAllByRole('link', { name: link.label })
        const footerLink = links.find(
          (el) => el.closest('footer') !== null
        )
        expect(footerLink).toHaveAttribute('href', link.href)
      })
    })
  })

  describe('email link', () => {
    it('renders an email link with mailto', () => {
      const emailLink = screen.getByRole('link', { name: /contact@dygotalent\.com/i })
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', `mailto:${siteConfig.email}`)
    })
  })

  describe('social media links', () => {
    it('renders an Instagram link', () => {
      const instagramLink = screen.getByRole('link', { name: /instagram/i })
      expect(instagramLink).toBeInTheDocument()
      expect(instagramLink).toHaveAttribute('href', siteConfig.socials.instagram)
    })

    it('Instagram link opens in a new tab', () => {
      const instagramLink = screen.getByRole('link', { name: /instagram/i })
      expect(instagramLink).toHaveAttribute('target', '_blank')
      expect(instagramLink).toHaveAttribute('rel', expect.stringContaining('noopener'))
    })
  })

  describe('copyright', () => {
    it('renders copyright text with current year', () => {
      const currentYear = new Date().getFullYear().toString()
      expect(screen.getByText(new RegExp(`©.*${currentYear}|${currentYear}.*©`))).toBeInTheDocument()
    })

    it('copyright mentions DygoTalent', () => {
      expect(screen.getByText(/©.*dygotalent|dygotalent.*©/i)).toBeInTheDocument()
    })
  })

  describe('semantic HTML', () => {
    it('uses a footer element with contentinfo role', () => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })
  })
})
