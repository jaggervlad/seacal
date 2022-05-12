const BackendSection: React.FC = () => {
  return (
    <div>
      <h4 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Backend
      </h4>

      <p className="mb-6 text-slate-600 dark:text-slate-400">
        Node.js y Typescript para crear servidores con comunicación HTTP, para
        servir API`s Rest con Express, y Graphql con Apollo Server y
        GraphqlTools.
      </p>

      <ul className="mb-4 ml-8 list-disc">
        <li className="text-slate-600 dark:text-slate-400">Rutas</li>
        <li className="text-slate-600 dark:text-slate-400">Middlawares</li>
        <li className="text-slate-600 dark:text-slate-400">
          Autenticación y Autorización
        </li>
        <li className="text-slate-600 dark:text-slate-400">JSON Web Tokens</li>
        <li className="text-slate-600 dark:text-slate-400">Express Session</li>
        <li className="text-slate-600 dark:text-slate-400">
          Contraseñas Encriptadas
        </li>
        <li className="text-slate-600 dark:text-slate-400">
          Validaciones y Data Transfer Objects(DTO)
        </li>
      </ul>
    </div>
  );
};

export default BackendSection;
