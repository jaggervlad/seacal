import { GiSkills } from 'react-icons/gi';
import Title from './Title';
import SkillsInput from './SkillsInput';
import { skillsArray, softSkillsArray } from '@/lib/constants';

const SoftSkills = () => {
  return (
    <div className="wrapper" id="habilidades-blandas">
      <Title text="Habilidades Blandas" icon={<GiSkills />} />
      <div className="flex flex-wrap gap-4">
        {softSkillsArray.map((s) => (
          <SkillsInput key={s} title={s} />
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
