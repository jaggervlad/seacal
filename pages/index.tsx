import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import Layout from 'components/layouts/article';
import Paragraph from 'components/paragraph';
import Section from 'components/section';
import TechLinks from 'components/techLinks';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <Layout title="About">
      <Box
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        display="flex"
        mb={8}
      >
        <Box mr={{ base: 0, md: 14 }}>
          <Heading as="h2" variant="page-title">
            Sebastian Acosta Alonso
          </Heading>

          <Box as="p" color={useColorModeValue('gray.700', 'whiteAlpha.700')}>
            <Text fontWeight={'bold'}>Desarrollador Web Fullstack.</Text>
            <Paragraph>
              Aporto mis conocimientos y capacidades para crear soluciones a
              través de Aplicaciones Web(MultiCloud) y desde cualquier
              dispositivo(Full Responsive). En la actualidad me desempeño de
              forma independiente (freelance), radico en Perú y ofrezco mis
              servicios como desarrollador full-stack; me apasiona crear
              herramientas digitales que aporten soluciones integrales a
              cualquier tipo de gestión.
            </Paragraph>
          </Box>
        </Box>

        <Box>
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            maxWidth="100px"
            display="inline-block"
            alt="Profile image"
            src="/images/profile.jpeg"
          />
        </Box>
      </Box>

      <TechLinks />
    </Layout>
  );
};

export default Home;
