import { FiArrowUpRight } from 'react-icons/fi';
import SocialLink from './SocialLink';

const Contact = () => {
  return (
    <div className="wrapper" id="contacto">
      <div className="flex flex-col items-center justify-center max-w-5xl gap-4 mx-auto">
        <h2 className="text-2xl font-bold">Cont&#225;ctame</h2>
        <p className="text-lg font-medium tracking-wide text-center">
          Siempre estoy interesado en escuchar sobre nuevas oportunidades. Si
          tienes una oferta interesante o simplemente quieres comunicarte,
          estar&#233; encantado de recibir tus mensajes en mi bandeja de
          entrada. &#161;No dudes en contactarme y har&#233; mi mejor esfuerzo
          para responder lo antes posible!
        </p>
        <a href="mailto:seacal.pe@gmail.com">
          <button className="text-xl font-bold text-white duration-300 rounded-lg w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 hover:from-indigo-950 hover:to-blue-600">
            Di Hola!
          </button>
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
        <SocialLink title="Github" link="https://github.com/jaggervlad" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/seacaldev/"
        />
      </div>
    </div>
  );
};

export default Contact;
