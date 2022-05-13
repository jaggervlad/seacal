import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import NProgress from 'components/nprogress';

import 'react-toastify/dist/ReactToastify.css';
import 'styles/global.css';
import 'styles/nprogress.css';

const toastOpts: ToastContainerProps = {
  position: 'bottom-center',
  draggable: false,
  hideProgressBar: true,
  bodyClassName: 'w-full max-w-3xl',
  toastClassName:
    'bg-cyan-700 rounded-lg dark:bg-sky-500 text-white px-3 shadow-lg',
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <ThemeProvider attribute="class">
      <AnyComponent {...pageProps} key={router.route} />
      <ToastContainer {...toastOpts} />
      <NProgress />
    </ThemeProvider>
  );
}

export default MyApp;
