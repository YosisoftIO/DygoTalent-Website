import type { Metadata } from 'next'
import TeamContent from '@/components/pages/TeamContent'
import { BreadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Our Team — Meet the People Behind DygoTalent',
  description:
    'Meet the team behind DygoTalent. Our co-founders and crew are passionate about empowering creators and building lasting partnerships.',
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'Our Team — Meet the People Behind DygoTalent | DygoTalent',
    description:
      'Meet the team behind DygoTalent. Our co-founders and crew are passionate about empowering creators and building lasting partnerships.',
  },
  twitter: {
    title: 'Our Team — Meet the People Behind DygoTalent | DygoTalent',
    description:
      'Meet the team behind DygoTalent. Our co-founders and crew are passionate about empowering creators and building lasting partnerships.',
  },
}

export default function TeamPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Team', url: '/team' }]} />
      <TeamContent />
    </>
  )
}
