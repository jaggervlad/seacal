import Link from "next/link"

const FooterLink = ({ href, children }) => (
  <Link href={href}>
    <a className="text-base font-medium text-slate-500 transition hover:text-slate-600">
      {children}
    </a>
  </Link>
);

export default FooterLink;
