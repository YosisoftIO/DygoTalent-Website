export interface Client {
  id: string
  name: string
  logo: string
}

export const clients: Client[] = [
  {
    id: 'chess-com',
    name: 'Chess.com',
    logo: '/clients/chess-com.webp',
  },
  {
    id: 'icc',
    name: 'International Cricket Council',
    logo: '/clients/icc.svg',
  },
  {
    id: 'red-bull',
    name: 'Red Bull',
    logo: '/clients/red-bull.png',
  },
]
