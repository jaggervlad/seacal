import { GiSkills } from 'react-icons/gi';
import Title from './Title';
import SkillsInput from './SkillsInput';

const Skills = () => {
  return (
    <div className="wrapper" id="habilidades">
      <Title text="Habilidades" icon={<GiSkills />} />
      <div className="flex flex-wrap gap-4">
        <SkillsInput title="Javascript" />
        <SkillsInput title="PHP" />
        <SkillsInput title="Reactjs" />
        <SkillsInput title="Nextjs" />
        <SkillsInput title="Typescript" />
        <SkillsInput title="Expressjs" />
        <SkillsInput title="Redux Toolkit" />
        <SkillsInput title="MongoDB" />
        <SkillsInput title="Google Firebase" />
        <SkillsInput title="Tailwindcss" />
        <SkillsInput title="Sanity.io" />
        <SkillsInput title="WordPress" />
        <SkillsInput title="HTML5" />
        <SkillsInput title="CSS3" />
        <SkillsInput title="VS Code" />
        <SkillsInput title="Atom" />
        <SkillsInput title="Git" />
        <SkillsInput title="Github" />
        <SkillsInput title="Trello" />
        <SkillsInput title="Figma" />
        <SkillsInput title="Vercel" />
        <SkillsInput title="netlify" />
      </div>
    </div>
  );
};

export default Skills;
