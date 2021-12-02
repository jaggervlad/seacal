import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import Fonts from 'components/fonts';
import { AnimatePresence } from 'framer-motion';
import theme from 'lib/theme';

import Main from '../components/layouts/main';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
