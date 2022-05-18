import CrossIcon from './CrossIcon';
import MenuIcon from './MenuIcon';
import NavbarItem from './NavbarItem';

import { useState, useEffect } from 'react';
import useDelayedRender from 'use-delayed-render';
import classNames from 'classnames';
import styles from 'styles/mobile-menu.module.css';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(
    () =>
      function cleanup() {
        document.body.style.overflow = '';
      },
    []
  );

  return (
    <>
      <button
        className={classNames(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={classNames(
            styles.menu,
            'absolute flex flex-col bg-slate-50 dark:bg-slate-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <NavbarItem href="/" title="Inicio" />
          <NavbarItem href="/proyectos" title="Proyectos" />
          <NavbarItem href="/contacto" title="Contacto" />
          <NavbarItem href="/curriculum.pdf" title="Curriculum" />
          {/* <NavbarItem href="/blog" title="Blog" />
          <NavbarItem href="/snippets" title="Snippets" /> */}
        </ul>
      )}
    </>
  );
}
