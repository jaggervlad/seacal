import { Box, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import { BioSection, BioYear } from 'components/bio';
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
            <p>Desarrollador Web Fullstack.</p>
            Aporto mis conocimientos y capacidades para crear soluciones a
            través de Aplicaciones Web.
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
        <Heading as="h3" variant="section-title">
          Trabajo Actual
        </Heading>
        <Paragraph>
          En la actualidad me desempeño de forma independiente (freelance),
          radico en Perú y ofrezco mis servicios como desarrollador full-stack;
          me apasiona crear herramientas digitales que aporten soluciones
          integrales a cualquier tipo de gestión.
        </Paragraph>
      </Section>

      <TechLinks />

      <Section delay="0.2">
        <Heading as="h3" variant="section-title">
          Capacitación
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Naci en Lima - Perú
        </BioSection>
        <BioSection>
          <BioYear>2016 - 2017</BioYear>
          Instituto Tecnol&oacute;gico Superior Cibertec
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2020</BioYear>
          Udemy Web Full Stack, JavaScript, PHP, React Hooks, React Avanzado,
          NextJS
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2020</BioYear>
          Platzi capacitación en React Avanzando
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Warrior Marketing - Marketing Avanzando
        </BioSection>
      </Section>

      <Section delay={'0.3'}>
        <Heading as="h3" variant="section-title">
          Mis redes sociales
        </Heading>
        <SocialLinks />
      </Section>
    </Layout>
  );
};

export default Home;
