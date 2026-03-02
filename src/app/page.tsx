import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'DygoTalent — Talent Management Agency for the Creator Economy',
  description:
    'DygoTalent is a premier talent management agency representing creators and influencers. We connect brands with talent for authentic, impactful partnerships.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CTASection />
    </>
  )
}
