import Image from 'next/image';
import ProfileImg from '../public/img/profile.jpeg';

const Banner = () => {
  return (
    <div className="flex flex-col items-center gap-10 wrapper md:flex-row">
      {/* Image */}
      <div className="bg-black rounded-full w-44 h-44">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="Imagen de Perfil"
        />
      </div>
      {/* Description */}
      <div className="flex flex-col items-center w-3/4 gap-2 md:items-start">
        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Sebastian Acosta
        </h1>
        <h3 className="text-xl font-semibold tracking-wide text-transparent md:text-2xl bg-clip-text bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300">
          Full Stack Developer
        </h3>
        <p className="mb-4 text-base tracking-wide text-center md:text-left">
          Soy un desarrollador web con más de 4 años de experiencia en React.
          Tengo una sólida base en el desarrollo de front-end y back-end, y
          tengo habilidades para crear aplicaciones web receptivas y amigables
          para el usuario utilizando React y su ecosistema.
        </p>

        <a href="/curriculum.pdf" target="_blank" referrerPolicy="no-referrer">
          <button className="text-xl font-bold text-white duration-300 rounded-lg w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 hover:from-indigo-950 hover:to-blue-600">
            Curriculum
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
