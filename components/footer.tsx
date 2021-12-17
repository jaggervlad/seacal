import { Box, Text } from '@chakra-ui/react';

import SocialLinks from './socialLinks';

const Footer = () => {
  return (
    <>
      <Box
        align="center"
        opacity={0.8}
        fontSize="sm"
        display={{ base: 'flex' }}
        flexDirection={'column'}
        mt={8}
      >
        <SocialLinks />

        <Text isTruncated>Hecho con ❤️ por @seacal_dev</Text>
        <Text>
          &copy; {new Date().getFullYear()} Sebastian Acosta. Todos los derechos
          reservados.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
