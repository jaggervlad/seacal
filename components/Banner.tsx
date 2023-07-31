import Image from "next/image";
import ProfileImg from "../public/img/profile.jpeg";

const Banner = () => {
return (
<div className="wrapper flex flex-col md:flex-row items-center gap-10">
    {/* Image */}
    <div className="w-44 h-44 rounded-full bg-black">
        <Image className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover" src={ProfileImg}
            alt="Imagen de Perfil" />
    </div>
    {/* Description */}
    <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Sebastian Acosta</h1>
        <h3
            className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
            Full Stack Developer
        </h3>
        <p className="text-base mb-4 tracking-wide text-center md:text-left">
            Soy un desarrollador web con más de 4 años de experiencia en React. Tengo una sólida base en el desarrollo
            de front-end y back-end, y tengo habilidades para crear aplicaciones web receptivas y amigables para el
            usuario utilizando React y su ecosistema.
        </p>


        <a href="/curriculum.pdf" target="_blank" referrerPolicy="no-referrer">
            <button
                className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
                Curriculum
            </button>
        </a>
    </div>
</div>
);
};

export default Banner;
