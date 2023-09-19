import Title from './Title';
import ProjectCard from './ProjectCard';
import { FaProjectDiagram } from 'react-icons/fa';

import autoland from '../public/img/projects/autoland.png';
import dglamour from '../public/img/projects/dglamour.png';
import saape from '../public/img/projects/saape.png';
import readhub from '../public/img/projects/readhub.png';

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
      </div>
    </div>
  );
};

export default Projects;
