import MainContainer from 'components/layouts/main';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <MainContainer title="Acerca - Sebastian Acosta">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Acerca de mi
        </h1>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Hola soy programador, padre y deportista. Trabajo como Desarrollador
          Web Full Stack (Freelance).
        </p>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Tengo conocimientos tanto en el frontend como el backend, disfruto
          mucho de aprender nuevas tecnologias, buenas prácticas de desarrollo,
          patrones de diseño y arquitectura.
        </p>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
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
