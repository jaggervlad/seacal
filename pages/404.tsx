import { NextPage } from 'next';
import Link from 'next/link';
import MainContainer from 'components/layouts/main';

const NotFound: NextPage = () => (
  <MainContainer>
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-start justify-center border-slate-200 pb-16 dark:border-slate-700">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-200">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Página no encontrada.
            </h1>
            <p className="mt-2 text-base text-slate-500 dark:text-slate-300">
              Lo siento, esta pagina esta en mantenimiento.
            </p>
            <div className="mt-6">
              <Link href="/">
                <a className="text-base font-medium text-cyan-600 hover:text-cyan-500 dark:text-cyan-200">
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

export default NotFound;
