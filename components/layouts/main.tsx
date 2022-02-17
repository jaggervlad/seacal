import Head from 'next/head';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

const MainContainer: React.FC = ({ children, ...customMeta }) => {
  const meta = {
    title: 'Sebastian Acosta Web Dev',
    description: 'Web developer fullstack',
    ...customMeta,
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="flex flex-col justify-center px-8 bg-slate-50 dark:bg-slate-900">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MainContainer;
