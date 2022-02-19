import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { allBlogs } from '.contentlayer/data';
import { pick } from '@contentlayer/client';

import BlogPost from 'components/blogPost';
import MainContainer from 'components/layouts/main';

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
      <div className="flex flex-col items-start justify-center max-w-2xl w-full mx-auto pb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>

        <p className="mb-4 text-slate-600 dark:text-slate-400">
          {`He comenzado a escribir desde este año sobre desarrollo web.
            En total tengo ${posts.length} ${
            posts.length === 1 ? 'articulo' : 'articulos'
          } en mi blog.
            Uso la barra de busqueda para buscar por titulos.`}
        </p>

        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar Articulos"
            className="block w-full px-4 py-2 text-slate-900 bg-white border border-slate-300 rounded-md dark:border-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-slate-100"
          />
          <svg
            className="absolute w-5 h-5 text-slate-400 right-3 top-3 dark:text-slate-300"
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

          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
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
