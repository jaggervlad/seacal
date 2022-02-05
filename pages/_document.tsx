import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from 'lib/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="bg-slate-50 dark:bg-slate-900 text-slate-50 dark:text-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
