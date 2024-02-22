'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import LogoImg from '@/public/icons/logo.svg';

import { pageLinksArray } from '@/utils/links/pageLinks';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useCurrency } from '@/context/CurrencyContext';
import MenuMobileModal from '@/components/Navbar/MenuMobileModal/MenuMobileModal';
import MenuIcon from '@/components/Navbar/MenuIcon/MenuIcon';
import ContactsModal from '@/components/Navbar/ContactsModal/ContactsModal';
import CurrencyModal from '@/components/Navbar/CurrencyModal/CurrencyModal';

import styles from '@/components/Navbar/navbar.module.scss';
import ClickableComponent from '../ClickableComponent/ClickableComponent';

const Navbar = () => {
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isMobileMenuClose, setIsMobileMenuClose] = useState(false);
  const [desktopScreen, setDesktopScreen] = useState(false);
  const { width } = useWindowDimensions();
  const { selectedCurrency } = useCurrency();

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
      <nav className={styles.navbar}>
        <div className={styles.navbar__side}>
          {desktopScreen ? (
            <>
              {pageLinksArray.slice(0, 2).map((link, i) => (
                <ClickableComponent
                  key={i}
                  text={link.title}
                  href={link.path}
                  style={styles.link}
                />
                // <Link
                //   key={i}
                //   href={link.path}
                //   className={styles.link}
                // >
                //   {link.title}
                // </Link>
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
          {desktopScreen && (
            <ClickableComponent
              type="button"
              text={`Split currency / ${selectedCurrency}`}
              onClick={currencyModalHandler}
              style={`${styles.link} ${styles.link__button}`}
            />
            // <button
            //   type="button"
            //   onClick={currencyModalHandler}
            //   className={`${styles.link} ${styles.link__button}`}
            // >
            //   {`Split currency / ${selectedCurrency}`}
            // </button>
          )}
          <ClickableComponent
            type="button"
            text="Contacts"
            onClick={contactsModalHandler}
            style={`${styles.link} ${styles.link__button}`}
          />
          {/* <button
            type="button"
            onClick={contactsModalHandler}
            className={`${styles.link} ${styles.link__button}`}
          >
            Contacts
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
