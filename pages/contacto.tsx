import { NextPage } from 'next';

import MainContainer from 'components/layouts/main';
import ContactForm from 'components/contactForm';
import ContactInfo from 'components/contactInfo';

const ContacPage: NextPage = () => {
  return (
    <MainContainer>
      <div className="max-w-2xl flex flex-col justify-center items-start w-full mx-auto">
        <div className="">
          <ContactInfo />
        </div>
        <div className="mt-6 w-full">
          <ContactForm />
        </div>
      </div>
    </MainContainer>
  );
};

export default ContacPage;
