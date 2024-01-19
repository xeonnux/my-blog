interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
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
  {
    title: 'Animated Company Slogan using SVG',
    description: `Simply Financial Services(Pty) Ltd is undergoing some revamping or the UI and our CEO made a special request to have the Curve \`insurance\` word animated for the new landing page. I was so excited to show off my Custom SVG knowledge.`,
    imgSrc: '/static/images/simply.gif',
    href: 'https://www.simply.co.za',
  },
]

export default projectsData
