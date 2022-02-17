import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import NProgress from 'components/nprogress';

import 'styles/global.css';
import 'styles/nprogress.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} key={router.route} />
      <NProgress />
    </ThemeProvider>
  );
}

export default MyApp;
