import NavItem from './NavItem';
import ThemeIcons from './ThemeIcons';
import MobileNavbar from '../MobileNavbar';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between border-slate-200 bg-slate-50 bg-opacity-60 pt-8 pb-8  text-slate-900 dark:border-slate-700  dark:bg-slate-900 dark:text-slate-100 sm:pb-16">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div className="ml-[-0.60rem]">
          <MobileNavbar />
          <NavItem href="/" text="Inicio" />
          <NavItem href="/proyectos" text="Proyectos" />
          <NavItem href="/contacto" text="Contacto" />
          <NavItem href="/curriculum.pdf" text="Curriculum" />
          {/* <NavItem href="/blog" text="Blog" />
          <NavItem href="/snippets" text="Snippets" /> */}
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 ring-slate-300  transition-all hover:ring-2  dark:bg-slate-600"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && <ThemeIcons resolvedTheme={resolvedTheme} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
