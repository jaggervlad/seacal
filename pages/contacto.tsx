import { NextPage } from 'next';
import { MainLayout } from 'components/layouts';
import ContactForm from 'components/contactForm';
import ContactInfo from 'components/contactInfo';

const ContacPage: NextPage = () => (
  <MainLayout title="Contacto - Sebastian Acosta">
    <div className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center">
      <div className="">
        <ContactInfo />
      </div>
      <div className="mt-6 w-full">
        <ContactForm />
      </div>
    </div>
  </MainLayout>
);

export default ContacPage;
