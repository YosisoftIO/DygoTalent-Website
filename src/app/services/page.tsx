import type { Metadata } from 'next'
import ServicesContent from '@/components/pages/ServicesContent'

export const metadata: Metadata = {
  title: 'Our Services — Talent Management, Brand Collaborations & Growth Advisory',
  description:
    'Explore DygoTalent services: talent management for creators, brand collaboration matchmaking, and growth advisory to scale your presence in the creator economy.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services | DygoTalent',
    description:
      'Talent management, brand collaborations, and growth advisory for the creator economy.',
  },
  twitter: {
    title: 'Our Services | DygoTalent',
    description:
      'Talent management, brand collaborations, and growth advisory for the creator economy.',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
