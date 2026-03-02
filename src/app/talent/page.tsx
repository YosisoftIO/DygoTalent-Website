import type { Metadata } from 'next'
import TalentContent from '@/components/pages/TalentContent'

export const metadata: Metadata = {
  title: 'Talent Roster — Our Creators & Influencers',
  description:
    'Meet the talented creators and influencers managed by DygoTalent. Browse our roster spanning lifestyle, tech, fashion, and more.',
  alternates: {
    canonical: '/talent',
  },
  openGraph: {
    title: 'Talent Roster — Our Creators & Influencers | DygoTalent',
    description:
      'Meet the talented creators and influencers managed by DygoTalent.',
  },
  twitter: {
    title: 'Talent Roster — Our Creators & Influencers | DygoTalent',
    description:
      'Meet the talented creators and influencers managed by DygoTalent.',
  },
}

export default function TalentPage() {
  return <TalentContent />
}
