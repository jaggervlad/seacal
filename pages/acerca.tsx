import MainContainer from 'components/layouts/main';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <MainContainer>
      <div className="flex flex-col justify-center items-start max-w-2xl border-slate-200 dark:border-slate-700 mx-auto pb-16">
        <h3 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Acerca de mi
        </h3>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Hola, soy Sebastian. Soy programador, padre y deportista. Trabajo como
          Desarrollador Web Full Stack (Freelance).
        </p>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Tengo conocimientos tanto en el frontend como el backend, disfruto
          mucho de aprender nuevas tecnologias, buenas practicas, patrones de
          diseño, arquitectura, diseño.
        </p>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Comence estudiando en el Instituto Tecnologico Cibertec, pero me
          retire luego del 2do ciclo. En adelante todo lo que he aprendido ha
          sido de forma autodidacta y por cursos online. 😁
        </p>
      </div>
    </MainContainer>
  );
};

export default AboutPage;
