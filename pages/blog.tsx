import { Heading } from '@chakra-ui/react';
import Layout from 'components/layouts/blog';
import Section from 'components/section';
import { NextPage } from 'next';

const BlogPage: NextPage = () => {
  return (
    <Layout title="Blog">
      <Section delay={'0.1'}>
        <Heading as="h1">Todos los Posts</Heading>
      </Section>
    </Layout>
  );
};

export default BlogPage;
