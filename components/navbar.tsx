import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import Logo from './logo';
import ThemeToggleButton from './themeToggleButton';

import type { LinkProps } from '@chakra-ui/react';
interface LinkItemProps extends LinkProps {
  href: string;
  path: string;
}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  path,
  children,
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900');

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar: React.FC<{ path: string }> = ({ path, ...props }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
        alignItems="center"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        {/* Desktop  */}
        <Box flex={1} align="right">
          <Box mr={2} display={{ base: 'none', md: 'inline-block' }}>
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Posts
            </LinkItem>
            <LinkItem
              href="https://github.com/jaggervlad"
              path={path}
              isExternal
            >
              Github
            </LinkItem>
          </Box>

          {/* Mobile  */}
          <Box mr={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu id="navbar-menu" isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
              />

              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/jaggervlad">
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
