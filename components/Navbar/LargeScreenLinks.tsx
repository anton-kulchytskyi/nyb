import Link from 'next/link';

import { navbarLinksArray } from '@/utils/links/navbarLinksArray';

const leftLinks = navbarLinksArray.slice(0, 2);
const rightLinks = navbarLinksArray.slice(2);

import styles from './navbar.module.scss';

const LargeScreenLinks = () => {
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
