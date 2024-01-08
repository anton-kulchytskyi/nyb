'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import LogoImg from '@/public/icons/logo.svg';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import MenuMobileModal from '../MenuMobileModal/MenuMobileModal';

import LargeScreenLinks from './LargeScreenLinks';
import SmallScreenLinks from './SmallScreenLinks';

import styles from './navbar.module.scss';

const Navbar = () => {
  const [isClose, setIsClose] = useState(false);
  const [tabletScreen, setTabletScreen] = useState(false);
  const [desktopScreen, setDesktopScreen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const screen = (width as number) <= 768;
    setTabletScreen(screen);
    setDesktopScreen(!screen);
  }, [width]);

  const closeHandler = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      {isClose && (
        <MenuMobileModal
          isClose={isClose}
          closeHandler={closeHandler}
        />
      )}
      <nav className={styles.navbar}>
        <Link
          href="/"
          className={styles.logo}
        >
          <Image
            src={LogoImg}
            className={styles.logo__image}
            alt="Logo"
            priority
          />
        </Link>
        {tabletScreen && (
          <SmallScreenLinks
            isClose={isClose}
            closeHandler={closeHandler}
          />
        )}
        {desktopScreen && <LargeScreenLinks />}
      </nav>
    </>
  );
};

export default Navbar;
