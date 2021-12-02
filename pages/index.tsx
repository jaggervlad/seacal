import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Image,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { BioSection, BioYear } from 'components/bio';
import Layout from 'components/layouts/article';
import Paragraph from 'components/paragraph';
import Section from 'components/section';
import NextLink from 'next/link';
import {
  IoCheckmarkCircleOutline,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <Layout title="About">
      <Box flexDirection={{ base: 'column-reverse', md: 'row' }} display="flex">
        <Box mr={{ base: 0, md: 14 }}>
          <Heading as="h2" variant="page-title">
            Sebastian Acosta
          </Heading>
          <p>Full Stack Web Developer, Calisthenics Atlethe, Father</p>

          <Box as="p" color="gray.500" mt={3}>
            Hellping people to build amazing web apps.
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
          Work
        </Heading>
        <Paragraph>
          Sebastian is a freelance and a full-stack developer based in Peru with
          a passion for building digital services/stuff he wants.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Technologies
        </Heading>
        <Paragraph>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={IoCheckmarkCircleOutline} color="green.500" />
              NodeJS
            </ListItem>
            <ListItem>
              <ListIcon as={IoCheckmarkCircleOutline} color="green.500" />
              ReacJS
            </ListItem>
            <ListItem>
              <ListIcon as={IoCheckmarkCircleOutline} color="green.500" />
              NextJS
            </ListItem>
            <ListItem>
              <ListIcon as={IoCheckmarkCircleOutline} color="green.500" />
              CSS 3
            </ListItem>
            <ListItem>
              <ListIcon as={IoCheckmarkCircleOutline} color="green.500" />
              HTML 5
            </ListItem>
            <ListItem>
              <ListIcon as={IoCheckmarkCircleOutline} color="green.500" />
              MongoDB
            </ListItem>
            <ListItem>
              <ListIcon as={IoCheckmarkCircleOutline} color="green.500" />
              PostgreSQL
            </ListItem>
          </List>
        </Paragraph>
      </Section>

      <Section delay="0.2">
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Lima - Peru
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Studing in Cibertec Algorithm and Technology
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Workin building apps as a freelance.
        </BioSection>
      </Section>

      <Section delay={'0.3'}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jaggerjack" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @jaggervlad
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/gorilla_sw" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @gorilla_sw
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Layout>
  );
};

export default Home;
