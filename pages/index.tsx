import type { NextPage } from 'next';
import { MainLayout } from 'components/layouts';
import { KnowledegSection, Profile, SkillSection } from 'components/home';

const Home: NextPage = () => (
  <MainLayout>
    <div className="mx-auto flex max-w-2xl flex-col items-start justify-center space-y-4 border-slate-200 pb-8 dark:border-slate-700">
      <Profile />
      <SkillSection />
    </div>
  </MainLayout>
);

export default Home;
