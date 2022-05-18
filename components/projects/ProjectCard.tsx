import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { Project } from 'types';

function ProjectCard({ project }: { project: Project }) {
  const { title, demoUrl, codeUrl, imageUrl, description } = project;
  return (
    <div
      key={title}
      className="flex flex-col overflow-hidden rounded-md shadow-md shadow-gray-400 dark:border-slate-700 dark:shadow-slate-800"
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
        <div className="mt-6 flex items-center space-x-2">
          <a
            href={codeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center rounded-lg bg-black p-2 text-base  font-semibold text-white hover:bg-opacity-90 hover:text-opacity-95 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
          >
            Código
            <BsGithub className="ml-2 h-4 w-4" />
          </a>

          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center rounded-lg bg-cyan-600 p-2 text-base font-semibold text-white hover:bg-opacity-90 dark:bg-cyan-900 dark:hover:bg-opacity-90"
          >
            Demo
            <BiLinkExternal className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
