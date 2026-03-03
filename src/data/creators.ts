export interface Creator {
  id: string
  name: string
  photo: string
  niche: string
  socials: {
    instagram?: string
    youtube?: string
    twitter?: string
  }
}

export const creators: Creator[] = [
  {
    id: 'jack-styles',
    name: 'Jack Styles',
    photo: '/creators/jack-styles.png',
    niche: 'Pro Wrestling Announcer / Rapper',
    socials: {},
  },
  {
    id: 'goofygenchess',
    name: 'Goofygenchess',
    photo: '/creators/goofygenchess.jpeg',
    niche: 'Social Media Influencer',
    socials: {},
  },
  {
    id: 'saivite',
    name: 'Saivite',
    photo: '/creators/saivite.jpeg',
    niche: 'Music Producer / DJ',
    socials: {},
  },
  {
    id: 'pawan-ch',
    name: 'Pawan Ch',
    photo: '/creators/pawan-ch.jpeg',
    niche: 'Music Director',
    socials: {},
  },
  {
    id: 'poorvi-koutish',
    name: 'Poorvi Koutish',
    photo: '/creators/poorvi-koutish.jpeg',
    niche: 'Actor / Singer',
    socials: {},
  },
]

export const niches = ['All', 'Music', 'Entertainment', 'Social Media'] as const

export type Niche = (typeof niches)[number]
