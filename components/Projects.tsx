import Title from './Title';
import ProjectCard from './ProjectCard';
import { FaProjectDiagram } from 'react-icons/fa';

import saape from '../public/img/projects/saape.png';
import readhub from '../public/img/projects/readhub.png';
import ecommerce from '../public/img/projects/ecommerce.png';
import usersInterview from '../public/img/projects/users-interview.png';
import ghClone from '../public/img/projects/gh-clone.png';

const Projects = () => {
  return (
    <div className="wrapper" id="proyectos">
      <Title text="Proyectos" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <ProjectCard
          img={saape.src}
          title="Start Up Personal"
          link="https://saa.pe/"
        />
        <ProjectCard
          img={readhub.src}
          title="App de libros"
          link="https://saa.pe/"
          githubUrl="https://github.com/jaggervlad/book-list-test"
        />
        <ProjectCard
          img={ecommerce.src}
          title="Ecommerce"
          link="https://ecommerce-test-ruddy.vercel.app/"
          githubUrl="https://github.com/jaggervlad/ecommerce-test"
        />
        <ProjectCard
          img={usersInterview.src}
          title="Usuarios - Prueba técnica"
          link="https://users-react-interview.vercel.app/"
          githubUrl="https://github.com/jaggervlad/users-react-interview"
        />

        <ProjectCard
          img={ghClone.src}
          title="Clone Github"
          link="https://github-clone-jagger.vercel.app/"
          githubUrl="https://github.com/jaggervlad/github-clone"
        />
      </div>
    </div>
  );
};

export default Projects;
