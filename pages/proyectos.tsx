import MainContainer from 'components/layouts/main';
import { NextPage } from 'next';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

interface Project {
  id: string;
  title: string;
  codeUrl: string;
  demoUrl: string;
  imageUrl: string;
  description: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, demoUrl, codeUrl, imageUrl, description } = project;
  return (
    <div
      key={title}
      className="flex flex-col overflow-hidden rounded-lg border shadow-lg dark:border-slate-400"
    >
      <div className="flex-shrink-0">
        <Image
          width={500}
          height={225}
          layout="responsive"
          className="object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="flex flex-1 flex-col  justify-between bg-white p-6 dark:bg-slate-900">
        <div className="flex-1">
          <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white">
            {title}
          </h3>

          <p className="mt-3 text-base text-slate-500 dark:text-slate-300">
            {description}
          </p>
        </div>
        <div className="mt-6 flex items-center space-x-6">
          <a
            href={codeUrl}
            target={'_blank'}
            rel="noreferrer"
            className="cursor-pointer rounded border border-slate-600 p-2 text-base font-semibold text-black dark:border-slate-200 dark:text-slate-200"
          >
            <div className="flex items-center">
              Ver Codigo
              <BsGithub className="ml-2 h-4 w-4" />
            </div>
          </a>
          <a
            href={demoUrl}
            target={'_blank'}
            rel="noreferrer"
            className="cursor-pointer rounded border border-slate-600 p-2 text-base font-semibold text-black dark:border-slate-200 dark:text-slate-200"
          >
            <div className="flex items-center">
              Demo
              <BiLinkExternal className="ml-2 h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const projects: Project[] = [
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
      'Esta pagina web creada con Next.js, TailwindCSS, Firebase, Firebase Auth, Type Graphql y Prisma, es un buscador de casa por todo el mundo, puedes logearte con un correo electronico, y subir tus cosas o siemplemente buscar una.',
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

const ProjectsPage: NextPage = () => {
  return (
    <MainContainer title="Proyectos - Sebastian Acosta">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center pb-16">
        <h1 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-5xl">
          Proyectos Personales
        </h1>

        <p className="mb-4 text-slate-600 dark:text-slate-400">
          Aca les comparto algunos de los proyectos que he creado a lo largo de
          mi aprendizaje. Pueden ver el codigo en mi github y la demo.
        </p>

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-2 gap-y-6 lg:max-w-none">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default ProjectsPage;
