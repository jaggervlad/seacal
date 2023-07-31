import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiencia" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="velogig.com"
          subTitle="Senior Full Stack Web Developer 2022 - Presente"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Fiverr"
          subTitle="MERN Stack Developer 2019 - 2021"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
