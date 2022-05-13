import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { pick } from '@contentlayer/client';

import BlogPost from 'components/blogPost';
import MainContainer from 'components/layouts/main';
import { allBlogs } from '.contentlayer/data';

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredPosts = posts.filter((post) => {
    if (searchValue === '') return post;

    post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <MainContainer title="Blog - Sebastian Acosta">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center pb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Blog
        </h1>

        <p className="mb-4 text-slate-600 dark:text-slate-400">
          {`He comenzado a escribir desde este año sobre desarrollo web.
            En total tengo ${posts.length} ${
            posts.length === 1 ? 'articulo' : 'articulos'
          } en mi blog.
            Uso la barra de busqueda para buscar por titulos.`}
        </p>

        <div className="relative mb-4 w-full">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar Articulos"
            className="block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-slate-400 dark:text-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
            Todos Los Articulos
          </h3>
          {!filteredPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {filteredPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { posts } };
}
