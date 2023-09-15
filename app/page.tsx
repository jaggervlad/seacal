import Aboutme from '@/components/Aboutme';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="w-full px-4 text-gray-300 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
