import MainContainer from 'components/layouts/main';
import Image from 'next/image';
import type { NextPage } from 'next';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const Profile = () => (
  <div className="flex flex-col-reverse sm:flex-row items-start">
    <div className="flex flex-col pr-8">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
        Sebastian Acosta
      </h1>
      <h2 className="text-slate-700 dark:text-slate-200 mb-4 font-semibold">
        Desarrollador Web Fullstack
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Enfocado en la innovasión tecnológica, en constante aprendizaje de
        nuevas tecnologías en desarrollo web para ofrecer el mejor servicio.
      </p>
    </div>
    <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
      <Image
        alt="Sebastian Acosta"
        height={176}
        width={176}
        src="/images/profile.jpeg"
        className="rounded-full"
      />
    </div>
  </div>
);

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target={'_blank'}
    rel="noreferrer"
    className="underline font-mono font-semibold"
  >
    {children}
  </a>
);

const Home: NextPage = () => {
  return (
    <MainContainer>
      <div className="flex flex-col justify-center items-start max-w-2xl border-slate-200 dark:border-slate-700 mx-auto pb-8">
        <Profile />

        <div>
          <h3 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
            Conocimientos
          </h3>

          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Tengo 3 años de experiencia en desarrollo web, capacitado
            permanentemente en tecnoligías Frontend, Backend, Bases de Datos
            Relacionales y NO Relacionales, Git para el control de versiones,
            deploy continuo con Heroku y Vercel , Logging y Testing.
          </p>

          <div className="flex items-center space-x-4">
            <h4 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
              Frontend
            </h4>
            <FaReact className="text-black dark:text-white w-6 h-6" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Para el desarrollo frontend utilizo React.js: React Hooks, Context
            API, Reducer API, Redux y Redux Toolkit. Tengo experiencia usando el
            framework Next.js para aplicaciones que necesitan renderizado del
            lado del servidor y un mejor SEO.
          </p>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            SWR, Apollo Client, Fetch, Axios para conecciones con servidores.
            Autenticación con JWT o Cookies.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Para las guias de estilos y temas utilizo Css, Sass y TailwindCSS.
          </p>

          <div className="flex items-center space-x-4">
            <h4 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
              Backend
            </h4>
            <FaNodeJs className="text-black dark:text-white w-6 h-6" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Uso Node.js y Typescript para crear servidores con comunicación
            HTTP, para servir API`s Rest con Express, y Graphql con Apollo
            Server y GraphqlTools.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            * Autenticación, Autorización, Roles, Contraseñas seguras de
            usuarios con JWT, Express Sessions y Bcrypt.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            * Validación de data con Yup.
          </p>

          <div className="flex items-center space-x-4">
            <h4 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
              Bases de Datos
            </h4>
            <DiMongodb className="text-black dark:text-white w-6 h-6" />
            <AiOutlineConsoleSql className="text-black dark:text-white w-6 h-6" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Experiencia en el uso de mongodb y sql para la creación, edición y
            eliminación de información. Consultas avanzadas para relacionar la
            información y generar estadisticas, información de resultados para
            toma de desiciones, asi tambien como para mostrar solo la informacón
            mas relavante.
          </p>

          <p className="text-slate-600 dark:text-slate-400 mb-8"></p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
