import { Heading } from '@chakra-ui/react';
import { BioSection, BioYear } from 'components/bio';
import Layout from 'components/layouts/article';
import Section from 'components/section';
import { NextPage } from 'next';
import React from 'react';

interface Props {}

const KnowledgePage: NextPage = () => {
  return (
    <Layout title="Knowledge">
      <Section delay="0.2">
        <Heading as="h3" variant="section-title">
          Conocimientos
        </Heading>
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
    </Layout>
  );
};
export default KnowledgePage;
