import type { Metadata } from 'next'
import ServicesContent from '@/components/pages/ServicesContent'
import { BreadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Our Services — Talent Management & Brand Partnerships',
  description:
    'Explore DygoTalent services: talent management for creators, brand collaboration matchmaking, and growth advisory to scale your presence in the creator economy.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services — Talent Management & Brand Partnerships | DygoTalent',
    description:
      'Talent management, brand partnerships, and growth advisory for the creator economy.',
  },
  twitter: {
    title: 'Our Services — Talent Management & Brand Partnerships | DygoTalent',
    description:
      'Talent management, brand partnerships, and growth advisory for the creator economy.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Services', url: '/services' }]} />
      <ServicesContent />
    </>
  )
}
