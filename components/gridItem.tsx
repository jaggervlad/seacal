import {
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { Global } from '@emotion/react';
import Image from 'next/image';
import NextLink from 'next/link';

export const NextGridItem: React.FC<{
  href: string;
  title: string;
  //@ts-ignore
  src: string | StaticImport;
}> = ({ children, href, title, src }) => (
  <NextLink href={href}>
    <LinkBox
      as="a"
      w="100%"
      textAlign="center"
      borderWidth={2}
      borderColor={useColorModeValue('gray.300', 'whiteAlpha.300')}
      borderRadius="lg"
      p={2}
    >
      <Image src={src} alt={title} placeholder="blur" loading="lazy" />

      <Divider mt={2} />

      <LinkOverlay href={href}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </NextLink>
);

export const ExternalGridItem: React.FC<{
  href: string;
  title: string;
  //@ts-ignore
  src: string | StaticImport;
}> = ({ children, href, title, src }) => (
  <LinkBox
    w="100%"
    textAlign="center"
    borderWidth={2}
    borderColor={useColorModeValue('gray.300', 'whiteAlpha.300')}
    borderRadius="lg"
    p={2}
  >
    <Image src={src} alt={title} placeholder="blur" loading="lazy" />

    <Divider mt={2} />

    <LinkOverlay href={href} isExternal>
      <Text mt={2}>{title}</Text>
    </LinkOverlay>
    <Text fontSize={14}>{children}</Text>
  </LinkBox>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px
      }
    `}
  />
);
