import {
  Box,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { BioSection, BioYear } from 'components/bio';
import Layout from 'components/layouts/article';
import Paragraph from 'components/paragraph';
import Section from 'components/section';
import SocialLinks from 'components/socialLinks';
import { DiMongodb } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from 'react-icons/io5';
import {
  SiChakraui,
  SiMaterialui,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

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
            Ayudo a personas a crear increibles aplicaciones web.
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
          Sebastian is a freelance and a full-stack developer based in Peru with
          a passion for building digital services/stuff he wants.
        </Paragraph>
      </Section>

      <Box display="flex">
        <Box mr={20}>
          <Section delay="0.1">
            <Heading as="h3" variant="section-title">
              Tecnolog&iacute;as Frontend
            </Heading>
            <Paragraph>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={IoLogoReact} color="green.500" />
                  ReactJS
                </ListItem>
                <ListItem>
                  <ListIcon as={IoLogoJavascript} color="green.500" />
                  JavaScript
                </ListItem>
                <ListItem>
                  <ListIcon as={SiChakraui} color="green.500" />
                  Chakra UI
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMaterialui} color="green.500" />
                  Material UI
                </ListItem>
                <ListItem>
                  <ListIcon as={SiTailwindcss} color="green.500" />
                  TailwindCSS
                </ListItem>
              </List>
            </Paragraph>
          </Section>
        </Box>
        <Section delay="0.1">
          <Heading as="h3" variant="section-title">
            Tecnolog&iacute;as Backend
          </Heading>
          <Paragraph>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={IoLogoNodejs} color="green.500" />
                NodeJS
              </ListItem>
              <ListItem>
                <ListIcon as={SiTypescript} color="green.500" />
                Typescript
              </ListItem>
              <ListItem>
                <ListIcon as={DiMongodb} color="green.500" />
                MongoDB
              </ListItem>
              <ListItem>
                <ListIcon as={GrMysql} color="green.500" />
                MySQL
              </ListItem>
              <ListItem>
                <ListIcon as={SiPostgresql} color="green.500" />
                PostgreSQL
              </ListItem>
            </List>
          </Paragraph>
        </Section>
      </Box>

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
