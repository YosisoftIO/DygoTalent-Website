export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  includes: string[]
  forWho: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'talent-management',
    title: 'Talent Management',
    shortDescription:
      'End-to-end representation for creators and influencers.',
    fullDescription:
      'Comprehensive talent management including representation, contract negotiation, career strategy, and brand development for creators and influencers.',
    includes: [
      'Representation & advocacy',
      'Contract negotiation',
      'Career strategy & planning',
      'Brand development',
    ],
    forWho:
      'Creators, influencers, and content creators looking for professional management.',
    icon: 'users',
  },
  {
    id: 'brand-collaborations',
    title: 'Brand Collaborations',
    shortDescription:
      'Strategic partnerships between brands and creators.',
    fullDescription:
      'We connect brands with the right creators for authentic, impactful partnerships that drive results.',
    includes: [
      'Partnership matchmaking',
      'Campaign management',
      'Deal negotiation',
      'Performance tracking',
    ],
    forWho:
      'Brands looking to work with creators and influencers for authentic marketing.',
    icon: 'handshake',
  },
  {
    id: 'growth-advisory',
    title: 'Growth Advisory',
    shortDescription:
      'Strategic guidance to scale your brand and audience.',
    fullDescription:
      'Expert advisory services to help creators and brands develop their strategy, grow their audience, and scale their impact.',
    includes: [
      'Brand development strategy',
      'Audience growth planning',
      'Content strategy',
      'Platform optimization',
    ],
    forWho:
      'Creators and brands looking to scale their presence and impact.',
    icon: 'trending-up',
  },
]
