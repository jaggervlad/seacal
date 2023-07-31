import Title from "./Title";
import ProjectCard from "./ProjectCard";
import { FaProjectDiagram } from "react-icons/fa";


import autoland from "../public/img/projects/autoland.png";
import dglamour from "../public/img/projects/dglamour.png";
import saape from "../public/img/projects/saape.png";


const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Proyectos" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <ProjectCard
          img={autoland.src}
          title="Autoland React Version"
          link="https://autoland-migration.vercel.app/"
        />
        <ProjectCard
          img={dglamour.src}
          title="Ecommerce Dulce Glamour"
          link="https://www.dulce-glamour.com/"
        />
        <ProjectCard
          img={saape.src}
          title="Start Up Personal"
          link="https://saa.pe/"
        />
       
      </div>
    </div>
  );
};

export default Projects;
