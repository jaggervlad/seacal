import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import Layout from 'components/layouts/article';
import Paragraph from 'components/paragraph';
import Section from 'components/section';
import SocialLinks from 'components/socialLinks';
import TechLinks from 'components/techLinks';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <Layout title="About">
      <Box
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        display="flex"
        mb={4}
      >
        <Box mr={{ base: 0, md: 14 }}>
          <Heading as="h2" variant="page-title">
            Sebastian Acosta Alonso
          </Heading>

          <Box as="p" color={useColorModeValue('gray.700', 'whiteAlpha.500')}>
            <Text fontWeight={'bold'}>Desarrollador Web Fullstack.</Text>
            <Paragraph>
              Aporto mis conocimientos y capacidades para crear soluciones a
              través de Aplicaciones Web(MultiCloud) y desde cualquier
              dispositivo(Full Responsive).
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

      <Section delay="0.1">
        <Paragraph>
          En la actualidad me desempeño de forma independiente (freelance),
          radico en Perú y ofrezco mis servicios como desarrollador full-stack;
          me apasiona crear herramientas digitales que aporten soluciones
          integrales a cualquier tipo de gestión.
        </Paragraph>
      </Section>

      <TechLinks />

      <SocialLinks />
    </Layout>
  );
};

export default Home;
