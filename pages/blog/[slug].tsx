import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';
import BlogContainer from 'components/layouts/blog';

export default function Post({ post, tweets }: { post: Blog; tweets: any[] }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogContainer post={post}>
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
