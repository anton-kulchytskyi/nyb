'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import LogoImg from '@/public/icons/logo.svg';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useCurrency } from '@/context/CurrencyContext';
import MenuMobileModal from '@/components/Navbar/MenuMobileModal/MenuMobileModal';
import MenuIcon from '@/components/Navbar/MenuIcon/MenuIcon';
import ContactsModal from '@/components/Navbar/ContactsModal/ContactsModal';
import CurrencyModal from '@/components/Navbar/CurrencyModal/CurrencyModal';

import styles from '@/components/Navbar/navbar.module.scss';

const Navbar = () => {
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isMobileMenuClose, setIsMobileMenuClose] = useState(false);
  // const [tabletScreen, setTabletScreen] = useState(false);
  const [desktopScreen, setDesktopScreen] = useState(false);
  const { width } = useWindowDimensions();
  const { selectedCurrency } = useCurrency();

  useEffect(() => {
    const screen = (width as number) < 1200;
    // setTabletScreen(screen);
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
          // selectedCurrency={selectedCurrency}
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
              <Link
                href="/catalog"
                className={styles.link}
              >
                Yachts
              </Link>
              <Link
                href="/how-it-works"
                className={styles.link}
              >
                How it works?
              </Link>
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
            <button
              type="button"
              onClick={currencyModalHandler}
              className={`${styles.link} ${styles.link__button}`}
            >
              {`Split currency / ${selectedCurrency}`}
            </button>
          )}
          <button
            type="button"
            onClick={contactsModalHandler}
            className={`${styles.link} ${styles.link__button}`}
          >
            Contacts
          </button>
        </div>
      </nav>
    </>
  );

  // return (
  //   <>
  //     {isClose && (
  //       <MenuMobileModal
  //         isClose={isClose}
  //         closeHandler={closeHandler}
  //         currencyModalHandler={currencyModalHandler}
  //         // selectedCurrency={selectedCurrency}
  //       />
  //     )}
  // {isContactsModalOpen && (
  //   <ContactsModal
  //     isContactsModalOpen={isContactsModalOpen}
  //     contactsModalHandler={contactsModalHandler}
  //   />
  // )}
  //     {isCurrencyModalOpen && (
  //       <CurrencyModal
  //         isCurrencyModalOpen={isCurrencyModalOpen}
  //         currencyModalHandler={currencyModalHandler}
  //       />
  //     )}
  //     <nav className={styles.navbar}>
  //       <Link
  //         href="/"
  //         className={styles.logo}
  //       >
  //         <Image
  //           src={LogoImg}
  //           className={styles.logo__image}
  //           alt="Logo"
  //           priority
  //         />
  //       </Link>
  //       {tabletScreen && (
  //         <SmallScreenLinks
  //           isClose={isClose}
  //           closeHandler={closeHandler}
  //           contactsModalHandler={contactsModalHandler}
  //         />
  //       )}
  //       {desktopScreen && (
  //         <LargeScreenLinks
  //           contactsModalHandler={contactsModalHandler}
  //           currencyModalHandler={currencyModalHandler}
  //           // selectedCurrency={selectedCurrency}
  //         />
  //       )}
  //     </nav>
  //   </>
  // );
};

export default Navbar;
