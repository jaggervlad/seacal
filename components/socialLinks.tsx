import { Button, Icon, Link, List, ListItem } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

const SocialLinks = () => {
  return (
    <List>
      <ListItem>
        <Link href="https://github.com/jaggervlad" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoGithub} />}
          >
            @jaggervlad
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://instagram.com/seacal_dev" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoInstagram} />}
          >
            @seacal_dev
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://linkedin.com/in/seacaldev" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoLinkedin} />}
          >
            @seacal_dev
          </Button>
        </Link>
      </ListItem>
    </List>
  );
};

export default SocialLinks;
