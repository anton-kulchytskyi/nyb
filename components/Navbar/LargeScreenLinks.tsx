// 'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navbarLinksArray } from '@/utils/links/navbarLinksArray';

const leftLinks = navbarLinksArray.slice(0, 2);
// const rightLinks = navbarLinksArray.slice(2);

import styles from './navbar.module.scss';

type Props = {
  contactsModalHandler: () => void;
};

const LargeScreenLinks = ({ contactsModalHandler }: Props) => {
  const pathname = usePathname();

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
        <Link
          key="curr"
          href="/"
          className={styles.link}
        >
          Split currency
        </Link>
        <Link
          key="Contacts"
          href={pathname}
          className={styles.link}
          onClick={contactsModalHandler}
        >
          Contacts
        </Link>

        {/* {rightLinks.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={styles.link}
          >
            {link.title}
          </Link>
        ))} */}
      </div>
    </>
  );
};

export default LargeScreenLinks;
