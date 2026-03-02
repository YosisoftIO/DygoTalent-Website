import { render, screen } from '@testing-library/react'
import ContactPage from '@/app/contact/page'
import { siteConfig } from '@/data/siteConfig'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <span {...props}>{children}</span>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
    iframe: ({ ...props }: Record<string, unknown>) => <iframe {...props} />,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
  useInView: () => true,
}))

describe('Contact Page', () => {
  beforeEach(() => {
    render(<ContactPage />)
  })

  describe('main heading', () => {
    it('renders an H1 heading', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
    })

    it('heading relates to contact or getting in touch', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toMatch(/contact|get in touch|reach|connect|book/i)
    })
  })

  describe('Cal.com booking', () => {
    it('renders a Cal.com embed or booking link', () => {
      const { container } = render(<ContactPage />)
      // Check for either an iframe with cal.com src or a link to the cal URL
      const iframe = container.querySelector('iframe[src*="cal.com"]')
      const calLink = screen.queryByRole('link', { name: /book|schedule|cal/i })
      expect(iframe || calLink).toBeTruthy()
    })

    it('references the correct cal.com URL', () => {
      const { container } = render(<ContactPage />)
      const iframe = container.querySelector('iframe')
      const allLinks = screen.queryAllByRole('link')
      const hasCalRef =
        (iframe && iframe.getAttribute('src')?.includes('cal.com/dygo-talent')) ||
        allLinks.some((link) => link.getAttribute('href')?.includes('cal.com/dygo-talent'))
      expect(hasCalRef).toBe(true)
    })
  })

  describe('email', () => {
    it('renders the email address', () => {
      expect(screen.getByText(new RegExp(siteConfig.email))).toBeInTheDocument()
    })

    it('email has a mailto link', () => {
      const emailLink = screen.getByRole('link', { name: new RegExp(siteConfig.email) })
      expect(emailLink).toHaveAttribute('href', `mailto:${siteConfig.email}`)
    })
  })

  describe('social media links', () => {
    it('renders Instagram link', () => {
      const instagramLink = screen.getByRole('link', { name: /instagram/i })
      expect(instagramLink).toBeInTheDocument()
      expect(instagramLink).toHaveAttribute('href', siteConfig.socials.instagram)
    })

    it('social links open in new tab', () => {
      const instagramLink = screen.getByRole('link', { name: /instagram/i })
      expect(instagramLink).toHaveAttribute('target', '_blank')
    })

    it('social links have rel noopener for security', () => {
      const instagramLink = screen.getByRole('link', { name: /instagram/i })
      expect(instagramLink.getAttribute('rel')).toMatch(/noopener/)
    })
  })
})
