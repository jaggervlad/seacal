import { Knowledegs } from '.';
import KnowledegCard from './KnowledegCard';

interface Props {}

const SkillSection: React.FC<Props> = () => {
  return (
    <div className="mb-12 grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      {Knowledegs.map(({ id, title, description, skills }) => (
        <KnowledegCard key={id} title={title} description={description}>
          {skills && (
            <ul className="ml-4 list-disc">
              {skills.map((skill) => (
                <li
                  key={skill.id}
                  className="py-2 text-base text-slate-600 dark:text-slate-300"
                >
                  {skill.label}
                </li>
              ))}
            </ul>
          )}
        </KnowledegCard>
      ))}
    </div>
  );
};

export default SkillSection;
