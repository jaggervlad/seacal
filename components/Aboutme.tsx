import { SiInformatica } from 'react-icons/si';
import Title from './Title';

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="Acerca de mi" icon={<SiInformatica />} />
      <div className="flex flex-col gap-6 text-lg tracking-wide">
        <p>
          Soy un desarrollador web con más de 4 años de experiencia en React.
          Tengo una sólida base en el desarrollo de front-end y back-end, y
          tengo habilidades para crear aplicaciones web receptivas y amigables
          para el usuario utilizando React y su ecosistema. Cuento con
          experiencia trabajando en una variedad de proyectos, incluyendo la
          construcción y mantenimiento de aplicaciones de una sola página, la
          integración con APIs REST y la implementación de principios de diseño
          responsivo. Además, tengo habilidades avanzadas en el uso de
          herramientas como Webpack, npm y Git para el desarrollo y despliegue
          de proyectos. Aparte de mis habilidades técnicas, soy un comunicador
          sólido y un jugador de equipo. Puedo trabajar de manera efectiva con
          equipos multidisciplinarios y estoy cómodo asumiendo nuevos desafíos y
          aprendiendo nuevas tecnologías según sea necesario.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
