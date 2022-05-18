const ExternalLink = ({ href, children }) => (
  <a
    className="text-base font-medium text-slate-500 transition hover:text-slate-600"
    target="_blank"
    rel="noreferrer"
    href={href}
  >
    {children}
  </a>
);
export default ExternalLink;
