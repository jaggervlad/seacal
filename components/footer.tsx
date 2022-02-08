import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-slate-500 hover:text-slate-600 transition font-medium text-base"
    target="_blank"
    rel="noreferrer"
    href={href}
  >
    {children}
  </a>
);

const FooterLink = ({ href, children }) => (
  <Link href={href}>
    <a className="text-slate-500 hover:text-slate-600 transition font-medium text-base">
      {children}
    </a>
  </Link>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 mt-auto">
      <hr className="w-full border-1 border-slate-200 dark:border-slate-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-2 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <FooterLink href="/">Inicio</FooterLink>
          <FooterLink href="/acerca">Acerca</FooterLink>
          <FooterLink href="/proyectos">Proyectos</FooterLink>
          {/* <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/snippets">Snippets</FooterLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/seacaldev/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/jaggervlad">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.instagram.com/seacal_dev/">
            Instagram
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
