export interface Client {
  id: string
  name: string
  logo: string
}

export const clients: Client[] = [
  {
    id: 'client-1',
    name: 'Sample Brand',
    logo: '/clients/placeholder.svg',
  },
  // More clients will be added when data is available
]
