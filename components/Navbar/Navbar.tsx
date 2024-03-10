'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react'

import LogoImg from '@/public/icons/logo.svg';
import { pageLinksArray } from '@/utils/links/pageLinks';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useCurrency } from '@/context/CurrencyContext';
import MenuMobileModal from '@/components/Navbar/MenuMobileModal/MenuMobileModal';
import MenuIcon from '@/components/Navbar/MenuIcon/MenuIcon';
import ContactsModal from '@/components/Navbar/ContactsModal/ContactsModal';
import CurrencyModal from '@/components/Navbar/CurrencyModal/CurrencyModal';
import styles from '@/components/Navbar/navbar.module.scss';

import AccountModal from './AccountModal/AccountModal';
import LoginModal from './LoginModal/LoginModal';

const Navbar = () => {
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isAccountModalLoginOpen, setIsAccountModalLoginOpen] = useState(false);
  const [isMobileMenuClose, setIsMobileMenuClose] = useState(false);
  const [desktopScreen, setDesktopScreen] = useState(false);
  const { width } = useWindowDimensions();
  const { selectedCurrency } = useCurrency();
  const { data: session } = useSession();

  useEffect(() => {
    const screen = (width as number) < 1200;
    setDesktopScreen(!screen);
  }, [width]);

  const currencyModalHandler = () => {
    setIsCurrencyModalOpen(!isCurrencyModalOpen);
  };

  const contactsModalHandler = () => {
    setIsContactsModalOpen(!isContactsModalOpen);
  };

  const mobileMenuHandler = () => {
    setIsMobileMenuClose(!isMobileMenuClose);
  };

  const accountModalHandler = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
  };

  const accountModalLoginHandler = () => {
    setIsAccountModalLoginOpen(!isAccountModalLoginOpen);
  };

  const toggleBetweenModals = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
    setIsAccountModalLoginOpen(!isAccountModalLoginOpen);
  }

  return (
    <>
      {isMobileMenuClose && (
        <MenuMobileModal
          isMobileMenuClose={isMobileMenuClose}
          mobileMenuHandler={mobileMenuHandler}
          currencyModalHandler={currencyModalHandler}
        />
      )}
      {isCurrencyModalOpen && (
        <CurrencyModal
          isCurrencyModalOpen={isCurrencyModalOpen}
          currencyModalHandler={currencyModalHandler}
        />
      )}
      {isContactsModalOpen && (
        <ContactsModal
          isContactsModalOpen={isContactsModalOpen}
          contactsModalHandler={contactsModalHandler}
        />
      )}
      {isAccountModalLoginOpen && (
        <LoginModal
          toggleBetweenModals={toggleBetweenModals}
          isAccountModalLoginOpen={isAccountModalLoginOpen}
          accountModalLoginHandler={accountModalLoginHandler}
        />
      )}
      {isAccountModalOpen && (
        <AccountModal
          toggleBetweenModals={toggleBetweenModals}
          isAccountModalOpen={isAccountModalOpen}
          accountModalHandler={accountModalHandler}
        />
      )}
      <nav className={styles.navbar}>
        <div className={styles.navbar__side}>
          {desktopScreen ? (
            <>
              {pageLinksArray.slice(0, 2).map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  className={styles.link}
                >
                  {link.title}
                </Link>
              ))}
            </>
          ) : (
            <MenuIcon
              isMobileMenuClose={isMobileMenuClose}
              mobileMenuHandler={mobileMenuHandler}
            />
          )}
        </div>
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
        <div className={styles.navbar__side}>
          {desktopScreen ? (
            <>
              <button
                className={`${styles.link} ${styles.favourite_icon}`}
              />
              {
                session && session.user ? (
                  <button
                    onClick={() => signOut()}
                    className={`${styles.link} ${styles.link__button}`}
                  >
                    {session.user.name}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={accountModalHandler}
                    className={`${styles.link} ${styles.link__button}`}
                  >
                    My account
                  </button>
                )
              }
              <button
                type="button"
                onClick={currencyModalHandler}
                className={`${styles.link} ${styles.link__button}`}
              >
                {`Split currency / ${selectedCurrency}`}
              </button>
              <button
                type="button"
                onClick={contactsModalHandler}
                className={`${styles.link} ${styles.link__button}`}
              >
                Contacts
              </button>
            </>
          ) : (
            <>
              {
                session && session.user ? (
                  <button onClick={() => signOut()}>
                    {session.user.name}
                  </button>
                  
                ) : (
                  <button
                    type="button"
                    onClick={accountModalHandler}
                    className={`${styles.link} ${styles.account_icon}`}
                  />
                )
              }
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
