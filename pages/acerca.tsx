import MainContainer from 'components/layouts/main';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <MainContainer title="Acerca - Sebastian Acosta">
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center pb-16">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          Acerca de mi
        </h1>

        <p className="mb-4 text-base font-medium text-slate-600 dark:text-slate-400 md:text-lg">
          Hola soy programador, padre y deportista. Trabajo como Desarrollador
          Web Full Stack (Freelance).
        </p>

        <p className="mb-4 text-base font-medium text-slate-600 dark:text-slate-400 md:text-lg">
          Tengo conocimientos tanto en el frontend como el backend, disfruto
          mucho de aprender nuevas tecnologias, buenas prácticas de desarrollo,
          patrones de diseño y arquitectura.
        </p>

        <p className="mb-4 text-base font-medium text-slate-600 dark:text-slate-400 md:text-lg">
          Comence mi capacitación como desarrollador en el Instituto Tecnológico
          Cibertec(2do ciclo), luego de esto continue mi aprendizaje y
          capacitación de forma autodidacta y por cursos online(Udemy, Platzi,
          EdTeam). 😁
        </p>
      </div>
    </MainContainer>
  );
};

export default AboutPage;
