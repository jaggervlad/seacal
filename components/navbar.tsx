import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import cn from 'classnames';
import MobileMenu from './mobileNavbar';

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
          <MobileMenu />
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

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-slate-800 dark:text-slate-200'
            : 'font-normal text-slate-600 dark:text-slate-400',
          'hidden rounded-lg p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-800 sm:px-3 sm:py-2 md:inline-block'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

function ThemeIcons({ resolvedTheme }: { resolvedTheme: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5 text-slate-800 dark:text-slate-200"
    >
      {resolvedTheme === 'dark' ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      )}
    </svg>
  );
}

export default Navbar;
