import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutContent'

export const metadata: Metadata = {
  title: 'About Us — Our Story & Mission',
  description:
    'Learn about DygoTalent, a talent management agency empowering creators in the creator economy. Discover our story, mission, values, and what makes us different.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us — Our Story & Mission | DygoTalent',
    description:
      'Learn about DygoTalent, a talent management agency empowering creators in the creator economy.',
  },
  twitter: {
    title: 'About Us — Our Story & Mission | DygoTalent',
    description:
      'Learn about DygoTalent, a talent management agency empowering creators in the creator economy.',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
