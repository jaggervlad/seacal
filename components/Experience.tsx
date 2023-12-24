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
          title="Freelancer"
          subTitle="Full Stack Developer 2019 - Present"
          icon={<SiFreelancer />}
        />
        <ExperienceCard
          title="velogig.com"
          subTitle="Senior Web Dev 2022 - 2023"
          icon={<SiReactivex />}
        />
      </div>
    </section>
  );
};

export default Experience;
