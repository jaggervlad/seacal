import { Project } from 'types';
export { default as ProjectCard } from './ProjectCard';

export const projects: Project[] = [
  {
    id: Math.floor(Date.now() * Math.random()).toString(),
    title: 'Realestate Clone',
    codeUrl: 'https://github.com/jaggervlad/realestate-clone',
    demoUrl: 'https://realestate-nine-alpha.vercel.app/',
    description:
      'Pagina web de bienes raices, creado con Next.js, Chakra UI y Rapidapi, Axios y Framer Motion.',
    imageUrl: '/images/projects/realestate-clone.png',
  },
  {
    id: Math.floor(Date.now() * Math.random()).toString(),
    title: 'Next Houses',
    codeUrl: 'https://github.com/jaggervlad/house-course-next',
    demoUrl: 'https://house-course-next.vercel.app/',
    description:
      'Esta pagina web creada con Next.js, TailwindCSS, Firebase, Firebase Auth, Type Graphql y Prisma, es un buscador de casa por todo el mundo, puedes logearte con un correo electronico, y subir tus casas o siemplemente buscar una.',
    imageUrl: '/images/projects/next-houses.png',
  },
  {
    id: Math.floor(Date.now() * Math.random()).toString(),
    title: 'Seacal Commerce',
    codeUrl: 'https://github.com/jaggervlad/commerce-demo',
    demoUrl: 'https://commerce-demo-six-gamma.vercel.app/',
    description: 'Ecommerce desarrollado con Next.js TailwindCSS y Commerce.js',
    imageUrl: '/images/projects/seacal-commerce.png',
  },
];
