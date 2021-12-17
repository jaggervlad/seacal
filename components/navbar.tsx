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
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import Logo from './logo';
import ThemeToggleButton from './themeToggleButton';

import type { LinkProps } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';
interface LinkItemProps extends LinkProps {
  href: string;
  path: string;
}

//

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

const LinkMenuItem: React.FC<LinkItemProps> = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900');

  return (
    <NextLink href={href} passHref>
      <MenuItem
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        as={Link}
      >
        {children}
      </MenuItem>
    </NextLink>
  );
};

const Navbar: React.FC<{ path: string }> = ({ path, ...props }) => {
  const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#fffff', '#20202380')}
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
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Trabajos
          </LinkItem>
          <Link
            isExternal
            href="https://docs.google.com/document/d/1A3Ke6jFtFUJs1OQwrgHfVjntyPXF5rgEeJ3YIzu1mxk/edit?usp=sharing"
            p={2}
            color={inactiveColor}
          >
            Curriculum
          </Link>
          {/* <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem> */}
          <LinkItem
            isExternal
            href="https://github.com/jaggervlad/seacal"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <Tooltip
              label="Código fuente."
              placement="bottom"
              shouldWrapChildren
            >
              <IoLogoGithub />
            </Tooltip>
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          {/* Mobile  */}
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu id="navbar-menu" isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <LinkMenuItem href="/" path={path}>
                  Inicio
                </LinkMenuItem>
                <LinkMenuItem href="/works" path={path}>
                  Trabajos
                </LinkMenuItem>

                {/* <LinkMenuItem href="/blog" path={path}>
                  Blog
                </LinkMenuItem> */}
                <MenuItem
                  as={Link}
                  isExternal
                  href="https://docs.google.com/document/d/1A3Ke6jFtFUJs1OQwrgHfVjntyPXF5rgEeJ3YIzu1mxk/edit?usp=sharing"
                >
                  Curriculum
                </MenuItem>
                <MenuItem
                  as={Link}
                  isExternal
                  href="https://github.com/jaggervlad/seacal"
                >
                  Ver Fuente
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
