type Props = {
  title: string;
};

const SkillsInput = ({ title }: Props) => {
  return (
    <p className="px-6 py-2 text-lg tracking-wide text-gray-400 duration-300 bg-transparent border border-blue-800 rounded-lg hover:text-white hover:border-blue-600 hover:bg-black">
      {title}
    </p>
  );
};

export default SkillsInput;
