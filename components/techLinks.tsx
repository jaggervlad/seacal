import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';
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

import Paragraph from './paragraph';
import Section from './section';

const TechLinks = () => {
  return (
    <Box
      display="flex"
      justifyContent={'space-evenly'}
      flexDirection={{ base: 'column', sm: 'row' }}
    >
      <Box>
        <Section delay="0.1">
          <Heading as="h3" variant="section-title">
            Frontend
          </Heading>
          <Paragraph>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={IoLogoReact} color="green.500" />
                ReactJS
              </ListItem>
              <ListItem>
                <ListIcon as={IoLogoJavascript} color="green.500" />
                JavaScript
              </ListItem>
              <ListItem>
                <ListIcon as={SiChakraui} color="green.500" />
                Chakra UI
              </ListItem>
              <ListItem>
                <ListIcon as={SiMaterialui} color="green.500" />
                Material UI
              </ListItem>
              <ListItem>
                <ListIcon as={SiTailwindcss} color="green.500" />
                TailwindCSS
              </ListItem>
            </List>
          </Paragraph>
        </Section>
      </Box>
      <Box>
        <Section delay="0.1">
          <Heading as="h3" variant="section-title">
            Backend
          </Heading>
          <Paragraph>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={IoLogoNodejs} color="green.500" />
                Node.js
              </ListItem>
              <ListItem>
                <ListIcon as={SiTypescript} color="green.500" />
                Typescript
              </ListItem>
              <ListItem>
                <ListIcon as={SiNestjs} color="green.500" />
                Nest.js
              </ListItem>
              <ListItem>
                <ListIcon as={GiKoala} color="green.500" />
                Koa.js
              </ListItem>
              <ListItem>
                <ListIcon as={SiApollographql} color="green.500" />
                Apollo
              </ListItem>
            </List>
          </Paragraph>
        </Section>
      </Box>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Bases de Datos
        </Heading>
        <Paragraph>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={DiMongodb} color="green.500" />
              MongoDB
            </ListItem>
            <ListItem>
              <ListIcon as={GrMysql} color="green.500" />
              MySQL
            </ListItem>
            <ListItem>
              <ListIcon as={SiPostgresql} color="green.500" />
              PostgreSQL
            </ListItem>
          </List>
        </Paragraph>
      </Section>
    </Box>
  );
};

export default TechLinks;
