import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      align="center"
      justifyContent="space-between"
      opacity={0.8}
      fontSize="sm"
      display={{ base: 'flex' }}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Text isTruncated>Hecho con ❤️ por @seacal_dev</Text>
      <Text>
        &copy; {new Date().getFullYear()} Sebastian Acosta. Todos los derechos
        reservados.
      </Text>
    </Box>
  );
};

export default Footer;
