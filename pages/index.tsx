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
      <p className="text-slate-600 dark:text-slate-400 mb-16">
        Entusiaste en la tecnologia, enforcado en la innovasion, me encuentro
        siempre aprendiendo nuevas tecnologias, para ofrecer el mejor servicio.
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

const Home: NextPage = () => {
  return (
    <MainContainer>
      <div className="flex flex-col justify-center items-start max-w-2xl border-slate-200 dark:border-slate-700 mx-auto pb-16">
        <Profile />

        <div>
          <h3 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Conocimientos
          </h3>

          <p className="text-slate-600 dark:text-slate-400 mb-16">
            Llevo 2 años en el mundo del desarrollo web, tengo conocimientos en
            el lado del Frontend, Backend, Bases de Datos Relacionales y NO
            Relacionales, Git para el control de versiones, deploy continuo con
            Heroku y Vercel, Logging y Testing.
          </p>

          <div className="flex items-center space-x-4">
            <h4 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
              Frontend
            </h4>
            <FaReact className="text-black dark:text-white w-6 h-6" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Para el desarrollo frontend utilizo React.js con las ultimas
            caracteristicas: React Hooks, Context API, Reducer API, Redux y
            Redux Toolkit. Tengo experiencia usando el framework Next.js para
            aplicaciones que necesitan renderizado del lado del servidor y un
            mejor SEO
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-16">
            SWR, Apollo Client, Fetch, Axios para conecciones con servidores.
            Autenticacion con JWT o Cookies.
          </p>

          <div className="flex items-center space-x-4">
            <h4 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
              Backend
            </h4>
            <FaNodeJs className="text-black dark:text-white w-6 h-6" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Usó Node.js y Typescript para crear servidores con comunicación
            HTTP, para servir API`s Rest con express, y Grapqhl con Apollo
            Server y GraphqlTools
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            * Autenticacion, Autorizacion, Roles, Contraseñas seguras de
            usuarios con JWT, Express Sessions, Bcrypt.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-16">
            * Validacion de data con Yup.
          </p>

          <div className="flex items-center space-x-4">
            <h4 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
              Bases de Datos
            </h4>
            <DiMongodb className="text-black dark:text-white w-6 h-6" />
            <AiOutlineConsoleSql className="text-black dark:text-white w-6 h-6" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Tengo conocimiento usando mongodb y sql para la creacione, edición y
            eliminacion de información. Conocimientos en queries avanzadas para
            relacionar la información y generar estadisticas y toma de
            desiciones, asi tambien como para mostrar solo la informacón mas
            relavante.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            * Mongoose para escribir consultas para una base de datos de
            MongooDB, con características como validaciones, construcción de
            queries, middlewares, conversión de tipos.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-16"></p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
