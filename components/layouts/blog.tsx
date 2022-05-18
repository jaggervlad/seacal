import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/layouts/main';
import type { PropsWithChildren } from 'react';
import type { Blog } from '.contentlayer/types';

export default function BlogContainer({
  children,
  post,
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – Sebastian Acosta`}
      description={post.summary}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Sebastian Acosta"
              height={24}
              width={24}
              src="/images/profile.jpeg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Sebastian Acosta / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          {/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text}
            {` • `}
            <ViewCounter slug={post.slug} />
          </p> */}
        </div>
        <div className="prose mt-4 w-full max-w-none dark:prose-dark">
          {children}
        </div>
      </article>
    </Container>
  );
}
