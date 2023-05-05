import genre from './genre'

const navItem = [
  {
    title: 'Discover',
    items: [
      {
        title: 'Home',
        href: '/',
        disabled: false,
      },
      {
        title: 'Room',
        href: '/room',
        disabled: true,
      },
    ],
  },

  {
    title: 'Genre',
    items: genre.map((gen) => ({
      id: gen.id,
      title: gen.name,
      href: `/genre/${gen.id}`,
      disabled: false,
    })),
  },
]

export type NavItem = typeof navItem

export default navItem
