export const siteConfig = {
  name: 'DygoTalent',
  description:
    'Talent management and branding agency for the creator economy. We represent creators, connect brands, and build lasting partnerships.',
  url: 'https://dygotalent.com',
  email: 'contact@dygotalent.com',
  calUrl: 'https://cal.com/dygo-talent',
  socials: {
    instagram: 'https://www.instagram.com/dygotalent/',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Talent', href: '/talent' },
    { label: 'Contact', href: '/contact' },
  ],
} as const

export type NavLink = (typeof siteConfig.navLinks)[number]
