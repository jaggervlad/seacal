import { Container, Box } from '@chakra-ui/react';
import Head from 'next/head';
import type { Router } from 'next/router';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

const Main: React.FC<{ router: Router }> = ({
  children,
  router,
  ...customMeta
}) => {
  const meta = {
    title: 'Sebastian Acosta Web Dev',
    description: 'Web developer fullstack',
    ...customMeta,
  };

  return (
    <Box as="main" pb={8}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
