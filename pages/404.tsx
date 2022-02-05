import { NextPage } from 'next';
import Link from 'next/link';
import MainContainer from 'components/layouts/main';

const NotFound: NextPage = () => {
  return (
    <MainContainer>
      <div className="min-h-[70vh] flex flex-col justify-center items-start max-w-2xl border-slate-200 dark:border-slate-700 mx-auto pb-16">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-left">
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-200 uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight sm:text-5xl">
                Página no encontrada.
              </h1>
              <p className="mt-2 text-base text-slate-500 dark:text-slate-300">
                Lo siento, esta pagina esta en mantenimiento.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <a className="text-base font-medium text-cyan-600 dark:text-cyan-200 hover:text-cyan-500">
                    Regresar al inicio<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MainContainer>
  );
};

export default NotFound;
