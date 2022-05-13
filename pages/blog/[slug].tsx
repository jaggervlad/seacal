import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import BlogContainer from 'components/layouts/blog';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

export default function Post({ post }: { post: Blog }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogContainer post={post}>
      {/* @ts-ignore */}
      <Component
        components={
          {
            ...components,
          } as any
        }
      />
    </BlogContainer>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: { post } };
}
