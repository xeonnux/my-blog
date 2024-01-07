interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'An portal for all the good things on the island',
    description: `What if you could look up any nice activities and places on the island? Restaurants, Bars, NightClubs, Beaches, Hikes, etc. All in one place. That's what we are building here.`,
    imgSrc: '/static/images/bonzanana.png',
    href: 'https://www.bonzanana.com',
  },
  {
    title: 'Nullpod',
    description: `A very good friend of mine build his own company and now is growing at an incredible pace. I'm helping him with some of the projects they are on.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://www.nullpod.com',
  },
]

export default projectsData
