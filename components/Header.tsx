import Link from 'next/link';

export const Header = () => {
  return (
    <header className="z-10 -scroll-mb-24 items-center py-10  bg-gray-950 border-b-[1px] border-slate-700 flex justify-between">
      <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
        Seacal
      </h1>

      <nav>
        <ul className="items-center hidden gap-4 text-lg md:flex">
          <NavItem label="Experiencia" href="/#experiencia" />
          <NavItem label="Skills" href="/#habilidades" />
          <NavItem label="Proyectos" href="/#proyectos" />
          <NavItem label="Contacto" href="/#contacto" />
        </ul>
      </nav>
    </header>
  );
};

const NavItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link href={href} scroll={true}>
      <div className="relative flex items-center justify-center overflow-hidden text-transparent duration-500 from-white via-blue-500 to-blue-500 hover:text-white hover:cursor-pointer group bg-clip-text bg-gradient-to-r">
        {label}
        <span className="bg-blue-600 absolute w-full h-[2px] block bottom-0 rounded-md -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 hover:cursor-pointer"></span>
      </div>
    </Link>
  );
};
