// 'use client';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { useSearchParams } from 'next/navigation';
// import { headers } from 'next/headers';

import { navbarLinksArray } from '@/utils/links/navbarLinksArray';

const leftLinks = navbarLinksArray.slice(0, 2);
const rightLinks = navbarLinksArray.slice(2);

import styles from './navbar.module.scss';

const LargeScreenLinks = () => {
  // const link1 = 'Reviews';
  // const link2 = 'Contacts';
  // const hashUrl = (link1 || link2) ? '/'
  // const router = useRouter();
  // const headersList = headers();
  // const referer = headersList.get('referer');

  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // eslint-disable-next-line
  // console.log(referer);
  // eslint-disable-next-line
  // console.log(searchParams);

  return (
    <>
      <div className={styles.navbar__side}>
        {leftLinks.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={styles.link}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className={styles.navbar__side}>
        {rightLinks.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={styles.link}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default LargeScreenLinks;
