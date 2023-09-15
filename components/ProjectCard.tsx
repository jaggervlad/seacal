import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
interface Props {
  title: string;
  link: string;
  img: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, link, img, githubUrl }: Props) => {
  return (
    <div>
      <a href={link} target="_blank">
        <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative group">
          <Image
            className="object-cover transition-transform duration-[3s]"
            width={350}
            height={350}
            src={img}
            alt={title}
          />
          <p className="absolute bottom-0 hidden w-full py-1 font-semibold text-center text-white duration-300 bg-blue-600 group-hover:inline-block">
            {title}
          </p>
        </div>
      </a>

      <div className="flex gap-3 py-3">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white duration-300 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 hover:from-indigo-950 hover:to-blue-600"
          >
            CÓDIGO <AiFillGithub className="w-5 h-5" />
          </Link>
        )}

        <Link
          href={link}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white duration-300 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 hover:from-indigo-950 hover:to-blue-600"
        >
          DEMO <AiOutlineLink className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
