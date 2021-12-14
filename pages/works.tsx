import { Heading, SimpleGrid } from '@chakra-ui/react';
import { ExternalGridItem } from 'components/gridItem';
import Layout from 'components/layouts/article';
import Section from 'components/section';
import { NextPage } from 'next';
import dgCrmThumb from 'public/images/dg-shoot-2.png';
import dgCommerceThumb from 'public/images/dg-shopping.png';

const WorksPage: NextPage = () => {
  return (
    <Layout title="Projects">
      <Heading as="h3" variant="section-title">
        Trabajos Recientes
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6} mb={8} mt={6}>
        <Section delay={'0.1'}>
          <ExternalGridItem
            title="Dulce Glamour Comercial"
            href="https://res.cloudinary.com/seakal/video/upload/v1639461807/bvtesqahemsykx0qngjy.mp4"
            src={dgCrmThumb}
          >
            Sistema Comercial, CRM
          </ExternalGridItem>
        </Section>
        <Section delay={'0.1'}>
          <ExternalGridItem
            title="Dulce Glamour Shopping"
            href="https://res.cloudinary.com/seakal/video/upload/v1639462809/jhi74fdwduljbdkwjv0l.mp4"
            src={dgCommerceThumb}
          >
            Comercio Electrónico, Shopping, Catálogo
          </ExternalGridItem>
        </Section>
      </SimpleGrid>
    </Layout>
  );
};

export default WorksPage;
