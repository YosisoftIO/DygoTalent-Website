import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import CTASection from '@/components/sections/CTASection'
import { BreadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'DygoTalent — Talent Management Agency for the Creator Economy',
  description:
    'DygoTalent is a premier talent management agency representing creators and influencers. We connect brands with talent for authentic, impactful partnerships.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DygoTalent — Talent Management for the Creator Economy',
    description:
      'Premier talent management agency representing creators and influencers. Authentic, impactful brand partnerships.',
  },
  twitter: {
    title: 'DygoTalent — Talent Management for the Creator Economy',
    description:
      'Premier talent management agency representing creators and influencers. Authentic, impactful brand partnerships.',
  },
}

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[]} />
      <Hero />
      <ServicesOverview />
      <CTASection />
    </>
  )
}
