import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
return (
<div className="wrapper">
    <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Contáctame</h2>
        <p className="text-lg tracking-wide font-medium text-center">
            Aunque actualmente no estoy buscando nuevas oportunidades, siempre estoy disponible para recibir mensajes en
            mi bandeja de entrada. Ya sea que tengas alguna pregunta o simplemente quieras saludar, ¡haré mi mejor
            esfuerzo para responderte lo antes posible!
        </p>
        <a href="mailto:seacal.pe@gmail.com">
            <button
                className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
                Di Hola!
            </button>
        </a>
    </div>
    <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/jaggervlad" />
        <SocialLink title="Linkedin" link="https://www.linkedin.com/in/seacaldev/" />
    </div>
</div>
);
};

export default Contact;
