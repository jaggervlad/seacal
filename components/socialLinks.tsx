import {
  Button,
  Icon,
  Link,
  List,
  ListItem,
  Box,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

const SocialLinks = () => {
  const iconColor = useColorModeValue('teal', 'white');
  return (
    <Stack direction="row" justify="center">
      <Link href="https://github.com/jaggervlad" target="_blank">
        <Icon as={IoLogoGithub} h={6} w={6} color={iconColor} />
      </Link>
      <Link href="https://instagram.com/seacal_dev" target="_blank">
        <Icon as={IoLogoInstagram} h={6} w={6} color={iconColor} />
      </Link>
      <Link href="http://linkedin.com/in/seacaldev" target="_blank">
        <Icon as={IoLogoLinkedin} h={6} w={6} color={iconColor} />
      </Link>
    </Stack>
  );
};

export default SocialLinks;
