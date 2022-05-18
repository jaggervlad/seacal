import Link from 'next/link';

import { useRouter } from 'next/router';
import classNames from 'classnames';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={classNames(
          isActive
            ? 'font-semibold text-slate-800 dark:text-slate-200'
            : 'font-normal text-slate-600 dark:text-slate-400',
          'hidden rounded-lg p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-800 sm:px-3 sm:py-2 md:inline-block'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

export default NavItem;
