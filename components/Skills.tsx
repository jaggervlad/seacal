import Title from './Title';
import SkillsInput from './SkillsInput';
import { skillsArray } from '@/lib/constants';
import { AiFillThunderbolt } from 'react-icons/ai';

const Skills = () => {
  return (
    <div className="wrapper" id="habilidades">
      <Title text="Tecnolog&#237;as" icon={<AiFillThunderbolt />} />
      <div className="flex flex-wrap gap-4">
        {skillsArray.map((s) => (
          <SkillsInput key={s} title={s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
