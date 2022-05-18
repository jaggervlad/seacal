import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavbarItem({ href, title }: { href: string; title: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <li
      className={classNames(
        isActive
          ? 'font-semibold text-slate-800 dark:text-slate-200'
          : 'font-normal text-slate-600 dark:text-slate-400',
        'border-b border-slate-300 text-sm dark:border-slate-700'
      )}
      style={{ transitionDelay: '250ms' }}
    >
      <Link href={href}>
        <a className="flex w-auto pb-4">{title}</a>
      </Link>
    </li>
  );
}

export default NavbarItem;
