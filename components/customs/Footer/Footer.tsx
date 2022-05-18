import FooterLink from './FooterLink';
import FooterExternalLink from './FooterExternalLink';

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 mt-auto flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="border-1 mb-8 w-full border-slate-200 dark:border-slate-800" />
      <div className="grid w-full max-w-2xl grid-cols-2 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <FooterLink href="/">Inicio</FooterLink>
          <FooterLink href="/acerca">Acerca</FooterLink>
          <FooterLink href="/proyectos">Proyectos</FooterLink>
          {/* <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/snippets">Snippets</FooterLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          <FooterExternalLink href="https://www.linkedin.com/in/seacaldev/">
            LinkedIn
          </FooterExternalLink>
          <FooterExternalLink href="https://github.com/jaggervlad">
            GitHub
          </FooterExternalLink>
          <FooterExternalLink href="https://www.instagram.com/seacal_dev/">
            Instagram
          </FooterExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <FooterLink href="/contacto">Contacto</FooterLink>
          <FooterLink href="/curriculum.pdf">Curriculum</FooterLink>
        </div>
      </div>
    </footer>
  );
}
