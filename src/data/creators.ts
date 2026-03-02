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
    id: 'creator-1',
    name: 'Sample Creator',
    photo: '/creators/placeholder.jpg',
    niche: 'Lifestyle',
    socials: { instagram: '#' },
  },
  // More creators will be added when data is available
]

export const niches = [
  'All',
  'Lifestyle',
  'Tech',
  'Fashion',
  'Food',
  'Travel',
  'Fitness',
] as const

export type Niche = (typeof niches)[number]
