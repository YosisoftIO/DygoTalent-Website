export interface TeamMember {
  id: string
  name: string
  photo: string
  role: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'alistair-macben',
    name: 'Alistair Macben',
    photo: '/team/alistair-macben.jpeg',
    role: 'Co-Founder',
  },
  {
    id: 'deepika-rajeswari',
    name: 'Deepika Rajeswari',
    photo: '/team/deepika-rajeswari.jpeg',
    role: 'Co-Founder',
  },
  {
    id: 'yoda',
    name: 'Yoda',
    photo: '/team/yoda.jpeg',
    role: 'Chief Happiness Officer',
  },
]
