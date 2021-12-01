import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { BioSection, BioYear } from 'components/bio';
import { GridItem } from 'components/gridItem';
import Paragraph from 'components/paragraph';
import Section from 'components/section';
import NextLink from 'next/link';
import dgCrmThumb from 'public/images/dg-shoot-2.png';
import dgCommerceThumb from 'public/images/dg-shopping.png';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <Container maxW="container.md" p={0}>
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
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Portfolio
            </Button>
          </NextLink>
        </Box>
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
          I ♥
        </Heading>
        <Paragraph>Coding, Calisthenics, Music, Reading</Paragraph>
      </Section>

      <Heading as="h3" variant="section-title">
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={6} mb={8}>
        <GridItem
          title="Dulce Glamour Comercial"
          href="http://dulceglamour.net"
          src={dgCrmThumb}
        >
          Sistem Comercial, CRM
        </GridItem>
        <GridItem
          title="Dulce Glamour Shopping"
          href="https://dg-shopping.vercel.app"
          src={dgCommerceThumb}
        >
          Commerce, Shoppin, Catalog
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
