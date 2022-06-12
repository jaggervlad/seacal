import Link from 'next/link';

const KnowledegCard: React.FC<{
  title: string;
  description: string;
}> = ({ title, description, children }) => {
  return (
    <div
      className={`overflow-hidden rounded-md border p-4 shadow-md shadow-gray-400 dark:border-slate-700 dark:shadow-slate-800 ${
        title === 'Data Base' && 'col-span-1'
      }`}
    >
      <div className="mt-2 mb-4 block">
        <p className="text-2xl font-bold text-slate-900 dark:text-slate-200">
          {title}
        </p>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      {children}
      <div className="mt-3">
        <Link href="/proyectos">
          <a className="cursor-pointer text-base font-semibold text-cyan-600 hover:text-cyan-500">
            Ver Proyectos
          </a>
        </Link>
      </div>
    </div>
  );
};

export default KnowledegCard;
