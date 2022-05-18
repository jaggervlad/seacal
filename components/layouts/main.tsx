import Head from 'next/head';
import { Navbar, Footer } from 'components/customs';

function MainContainer(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: 'Sebastian Acosta - Desarrollador',
    description: 'Desarrollador Frontend, Typescript, React',
    ...customMeta,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="flex flex-col justify-center bg-slate-50 px-8 dark:bg-slate-900">
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default MainContainer;
