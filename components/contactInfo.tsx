import { AiOutlineMail } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';

function ContactInfo() {
  return (
    <>
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
        Ponte en contacto conmigo
      </h2>
      <p className="mt-3 text-lg leading-6 text-slate-600 dark:text-slate-400">
        Estoy interesado en oportunidades independientes, especialmente
        proyectos ambiciosos o grandes. Sin embargo, si tiene otra solicitud o
        pregunta, no dude en utilizar el formulario.
      </p>
      <dl className="mt-8 text-base text-slate-600 dark:text-slate-400">
        <div className="mt-6">
          <dt className="sr-only">Phone number</dt>
          <dd className="flex">
            <BiCurrentLocation
              className="h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-400"
              aria-hidden="true"
            />
            <span className="ml-3 text-slate-600 dark:text-slate-400">
              Calleria, Pucallpa, Perú
            </span>
          </dd>
        </div>
        <div className="mt-3">
          <dt className="sr-only">Phone number</dt>
          <dd className="flex">
            <BsLinkedin
              className="h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-400"
              aria-hidden="true"
            />
            <a
              href="https://www.linkedin.com/in/seacaldev/"
              target="_blank"
              rel="nofollow noreferrer"
              className="ml-3 text-slate-600 hover:underline dark:text-slate-400"
            >
              https://www.linkedin.com
            </a>
          </dd>
        </div>
        <div className="mt-3">
          <dt className="sr-only">Email</dt>
          <dd className="flex">
            <AiOutlineMail
              className="h-6 w-6 flex-shrink-0 text-slate-600 dark:text-slate-400"
              aria-hidden="true"
            />
            <span className="ml-3 text-slate-600 dark:text-slate-400">
              jaggersaa.96@hotmail.com
            </span>
          </dd>
        </div>
      </dl>
    </>
  );
}

export default ContactInfo;
