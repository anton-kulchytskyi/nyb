'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import LogoImg from '@/public/icons/logo.svg';

import useWindowDimensions from '@/hooks/useWindowDimensions';

import { navbarLinksArray } from '@/utils/links/navbarLinksArray';

import MenuIcon from '../MenuIcon/MenuIcon';
import MenuMobileModal from '../MenuMobileModal/MenuMobileModal';

import styles from './navbar.module.scss';

const leftLinks = navbarLinksArray.slice(0, 2);
const rightLinks = navbarLinksArray.slice(2);

const Navbar = () => {
  const [isClose, setIsClose] = useState(false);
  const { width } = useWindowDimensions();
  const tabletScreen = (width as number) <= 768;

  const closeHandler = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <MenuMobileModal isClose={isClose} closeHandler={closeHandler} />
      <nav className={styles.navbar}>
        <div className={styles.navbar__side}>
          {tabletScreen ? (
            <MenuIcon isClose={isClose} closeHandler={closeHandler} />
          ) : (
            <>
              {leftLinks.map((link) => (
                <Link key={link.title} href={link.path} className={styles.link}>
                  {link.title}
                </Link>
              ))}
            </>
          )}
        </div>
        <Link href='/' className={styles.logo}>
          <Image
            src={LogoImg}
            className={styles.logo__image}
            alt='Logo'
            priority
          />
        </Link>
        <div className={styles.navbar__side}>
          {!tabletScreen ? (
            <>
              {rightLinks.map((link) => (
                <Link key={link.title} href={link.path} className={styles.link}>
                  {link.title}
                </Link>
              ))}
            </>
          ) : (
            <Link href='#contact' className={styles.link}>
              Contact
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
