import {
  Heading,
  List,
  ListIcon,
  ListItem as ChakraListItem,
  ListItemProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { DiMongodb } from 'react-icons/di';
import { GiKoala } from 'react-icons/gi';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from 'react-icons/io5';
import {
  SiApollographql,
  SiChakraui,
  SiMaterialui,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Section from './section';

const ListItem = (props: ListItemProps) => (
  <ChakraListItem
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    textAlign={'center'}
    justifyContent={'center'}
    m={4}
    {...props}
  >
    {props.children}
  </ChakraListItem>
);

const TechLinks = () => {
  const iconColor = useColorModeValue('teal', 'white');
  return (
    <Section delay="0.1">
      <Heading as="h3" variant="section-title">
        Tecnolog&iacute;as
      </Heading>
      <List
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <ListItem>
          <ListIcon h={8} w={8} as={IoLogoReact} color={iconColor} />
          ReactJS
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={IoLogoJavascript} color={iconColor} />
          JavaScript
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={SiChakraui} color={iconColor} />
          Chakra UI
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={SiMaterialui} color={iconColor} />
          Material UI
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={SiTailwindcss} color={iconColor} />
          TailwindCSS
        </ListItem>

        <ListItem>
          <ListIcon h={8} w={8} as={IoLogoNodejs} color={iconColor} />
          Node.js
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={SiTypescript} color={iconColor} />
          Typescript
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={SiNestjs} color={iconColor} />
          Nest.js
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={GiKoala} color={iconColor} />
          Koa.js
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={SiApollographql} color={iconColor} />
          Apollo
        </ListItem>

        <ListItem>
          <ListIcon h={8} w={8} as={DiMongodb} color={iconColor} />
          MongoDB
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={GrMysql} color={iconColor} />
          MySQL
        </ListItem>
        <ListItem>
          <ListIcon h={8} w={8} as={SiPostgresql} color={iconColor} />
          PostgreSQL
        </ListItem>
      </List>
    </Section>
  );
};

export default TechLinks;
