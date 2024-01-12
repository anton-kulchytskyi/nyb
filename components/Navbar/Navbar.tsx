'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import LogoImg from '@/public/icons/logo.svg';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import MenuMobileModal from '../MenuMobileModal/MenuMobileModal';

import ContactsModal from '../ContactsModal/ContactsModal';
import LargeScreenLinks from './LargeScreenLinks';
import SmallScreenLinks from './SmallScreenLinks';

import styles from './navbar.module.scss';

const Navbar = () => {
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [tabletScreen, setTabletScreen] = useState(false);
  const [desktopScreen, setDesktopScreen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const screen = (width as number) <= 768;
    setTabletScreen(screen);
    setDesktopScreen(!screen);
  }, [width]);

  const contactsModalHandler = () => {
    setIsContactsModalOpen(!isContactsModalOpen);
  };

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
      {isContactsModalOpen && (
        <ContactsModal
          isContactsModalOpen={isContactsModalOpen}
          contactsModalHandler={contactsModalHandler}
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
            contactsModalHandler={contactsModalHandler}
          />
        )}
        {desktopScreen && (
          <LargeScreenLinks contactsModalHandler={contactsModalHandler} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
