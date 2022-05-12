import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { Project } from 'types';

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, demoUrl, codeUrl, imageUrl, description } = project;
  return (
    <div
      key={title}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0 p-2">
        <Image
          width={500}
          height={225}
          layout="responsive"
          className="rounded-lg object-cover"
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
        <div className="mt-6 flex items-center space-x-8">
          <a
            href={codeUrl}
            target={'_blank'}
            rel="noreferrer"
            className="flex cursor-pointer items-center text-base font-semibold text-black hover:text-opacity-80 dark:text-slate-200 dark:hover:text-opacity-80"
          >
            Ver Codigo
            <BsGithub className="ml-2 h-4 w-4" />
          </a>

          <a
            href={demoUrl}
            target={'_blank'}
            rel="noreferrer"
            className="flex cursor-pointer items-center text-base font-semibold text-black hover:text-opacity-80 dark:border-slate-200 dark:text-slate-200 dark:hover:text-opacity-80"
          >
            Demo
            <BiLinkExternal className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
