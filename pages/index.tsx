import MainContainer from 'components/layouts/main';
import Image from 'next/image';
import type { NextPage } from 'next';

const Profile = () => (
  <div className="flex flex-col-reverse items-start sm:flex-row">
    <div className="flex flex-col pr-8">
      <h1 className="mb-1 text-3xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
        Sebastian Acosta
      </h1>
      <h2 className="mb-4 text-xl font-bold text-slate-700 dark:text-slate-200">
        Desarrollador Web Fullstack
      </h2>
      <p className="mb-8 text-slate-600 dark:text-slate-400">
        Enfocado en la innovasión tecnológica, en constante aprendizaje de
        nuevas tecnologías en desarrollo web para ofrecer el mejor servicio.
      </p>
    </div>
    {/* <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
      <Image
        alt="Sebastian Acosta"
        height={200}
        width={200}
        src="/images/profile.jpeg"
        className="rounded-full"
      />
    </div> */}
  </div>
);

const KnowledegSection: React.FC = () => {
  return (
    <div>
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Conocimientos
      </h3>

      <p className="mb-8 text-slate-600 dark:text-slate-400">
        Tengo 3 años de experiencia en desarrollo web, capacitado
        permanentemente en tecnoligías Frontend, Backend, Bases de Datos
        Relacionales y NO Relacionales, Git para el control de versiones, deploy
        continuo con Heroku y Vercel , Logging y Testing.
      </p>
    </div>
  );
};

const FrontendSection: React.FC = () => {
  return (
    <div>
      <h4 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Frontend
      </h4>

      <p className="mb-4 text-slate-600 dark:text-slate-400">
        Conocimiento avanzado de Javascript y ReactJS:
      </p>
      <ul className="mb-4 ml-8 list-disc">
        <li className="text-slate-600 dark:text-slate-400">React Hooks</li>
        <li className="text-slate-600 dark:text-slate-400">React Context</li>
        <li className="text-slate-600 dark:text-slate-400">
          Lazy Loading y Suspense
        </li>
        <li className="text-slate-600 dark:text-slate-400">
          Functional Components
        </li>
        <li className="text-slate-600 dark:text-slate-400">
          Server Side Rendering
        </li>
        <li className="text-slate-600 dark:text-slate-400">
          Redux y Redux Toolkit
        </li>
        <li className="text-slate-600 dark:text-slate-400">
          Redux y Redux Toolkit
        </li>
        <li className="text-slate-600 dark:text-slate-400">
          Intersection Observer
        </li>
      </ul>

      <p className="mb-4 text-slate-600 dark:text-slate-400">
        Conexion con Servidores:
      </p>
      <ul className="mb-4 ml-8 list-disc">
        <li className="text-slate-600 dark:text-slate-400">Apollo Client</li>
        <li className="text-slate-600 dark:text-slate-400">Graphql Request</li>
        <li className="text-slate-600 dark:text-slate-400">SWR</li>
        <li className="text-slate-600 dark:text-slate-400">React Query</li>
      </ul>

      <p className="mb-4 text-slate-600 dark:text-slate-400">
        Guias De Estilo y Sistemas de Diseños y Librerias de Componentes:
      </p>
      <ul className="mb-4 ml-8 list-disc">
        <li className="text-slate-600 dark:text-slate-400">Tailwind CSS</li>
        <li className="text-slate-600 dark:text-slate-400">Material UI</li>
        <li className="text-slate-600 dark:text-slate-400">Sass</li>
        <li className="text-slate-600 dark:text-slate-400">Next UI</li>
        <li className="text-slate-600 dark:text-slate-400">Bootstrap</li>
        <li className="text-slate-600 dark:text-slate-400">Daisy UI</li>
      </ul>
    </div>
  );
};

const BackendSection: React.FC = () => {
  return (
    <div>
      <h4 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Backend
      </h4>

      <p className="mb-6 text-slate-600 dark:text-slate-400">
        Uso Node.js y Typescript para crear servidores con comunicación HTTP,
        para servir API`s Rest con Express, y Graphql con Apollo Server y
        GraphqlTools.
      </p>
      <p className="mb-2 text-slate-600 dark:text-slate-400">
        * Autenticación, Autorización, Roles, Contraseñas seguras de usuarios
        con JWT, Express Sessions y Bcrypt.
      </p>
      <p className="mb-8 text-slate-600 dark:text-slate-400">
        * Validación de data con Yup.
      </p>
    </div>
  );
};

const DBSection: React.FC = () => {
  return (
    <div>
      <h4 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Bases de Datos
      </h4>

      <p className="mb-6 text-slate-600 dark:text-slate-400">
        Experiencia en el uso de mongodb y sql para la creación, edición y
        eliminación de información. Consultas avanzadas para relacionar la
        información y generar estadisticas, información de resultados para toma
        de desiciones, asi tambien como para mostrar solo la informacón mas
        relavante.
      </p>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <MainContainer>
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center space-y-4 border-slate-200 pb-8 dark:border-slate-700">
        <Profile />
        <KnowledegSection />
        <FrontendSection />
        <BackendSection />
        <DBSection />
      </div>
    </MainContainer>
  );
};

export default Home;
