import type { Metadata } from 'next'
import PortfolioContent from '@/components/pages/PortfolioContent'

export const metadata: Metadata = {
  title: 'Portfolio — Brands We\'ve Worked With',
  description:
    'Explore the brands and clients DygoTalent has partnered with. Our portfolio showcases successful collaborations across the creator economy.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio — Brands We\'ve Worked With | DygoTalent',
    description:
      'Explore the brands and clients DygoTalent has partnered with in the creator economy.',
  },
  twitter: {
    title: 'Portfolio — Brands We\'ve Worked With | DygoTalent',
    description:
      'Explore the brands and clients DygoTalent has partnered with in the creator economy.',
  },
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
