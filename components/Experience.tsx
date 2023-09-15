import Title from './Title';
import { MdWork } from 'react-icons/md';
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from 'react-icons/si';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section className="wrapper" id="experiencia">
      <Title text="Experiencias" icon={<MdWork />} />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ExperienceCard
          title="velogig.com"
          subTitle="Web Developer 2022 - Present"
          icon={<SiReactivex />}
        />

        <ExperienceCard
          title="Freelancer"
          subTitle="MERN Stack Developer 2019 - 2022"
          icon={<SiFreelancer />}
        />
      </div>
    </section>
  );
};

export default Experience;
