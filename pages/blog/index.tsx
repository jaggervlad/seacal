import { Heading } from '@chakra-ui/react';
import Layout from 'components/layouts/blog';
import Section from 'components/section';
import { InferGetStaticPropsType, NextPage } from 'next';
import { allBlogs } from '.contentlayer/data';
import { pick } from '@contentlayer/client';
import BlogPost from 'components/blogPost';

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts);

  return (
    <Layout title="Blog">
      <Section delay={'0.1'}>
        <Heading as="h1">Todos los Posts</Heading>

        {posts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </Section>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { posts } };
}
