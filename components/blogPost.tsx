import NextLink from 'next/link';
import {
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import type { Blog } from '.contentlayer/types';

export default function BlogPost({
  title,
  summary,
  slug,
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  return (
    <NextLink href={`/blog/${slug}`}>
      <LinkBox as="a" w="100%" p={2}>
        <LinkOverlay href={`/blog/${slug}`}>
          <Text fontSize={24} fontWeight="semibold" isTruncated as="h4" mt={2}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{summary}</Text>
      </LinkBox>
    </NextLink>
  );
}
