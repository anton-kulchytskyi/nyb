'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import { useCurrency } from '@/context/CurrencyContext';

import { pageLinksArray } from '@/utils/links/pageLinks';

import MenuMobileEUR from '@/public/icons/MenuMobileEUR.svg';
import MenuMobileGBP from '@/public/icons/MenuMobileGBP.svg';
import MenuMobileUSD from '@/public/icons/MenuMobileUSD.svg';
import MenuMobileNOK from '@/public/icons/MenuMobileNOK.svg';
import FollowInstagram from '@/public/icons/FollowMobileInstagram.svg';
import FollowTelegram from '@/public/icons/FollowMobileTelegram.svg';
import FollowWhatsApp from '@/public/icons/FollowMobileWhatsApp.svg';
import AccountModal from '../AccountModal/AccountModal';
import LoginModal from '../LoginModal/LoginModal';
import styles from './menuMobileModal.module.scss';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

type Props = {
  isMobileMenuClose: boolean;
  mobileMenuHandler: () => void;
  currencyModalHandler: () => void;
};

const MenuMobileModal = ({
  isMobileMenuClose,
  mobileMenuHandler,
  currencyModalHandler,
}: Props) => {
  const { selectedCurrency } = useCurrency();
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isAccountModalLoginOpen, setIsAccountModalLoginOpen] = useState(false);
  const accountModalHandler = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
  };
  const toggleBetweenModals = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
    setIsAccountModalLoginOpen(!isAccountModalLoginOpen);
  }
  const accountModalLoginHandler = () => {
    setIsAccountModalLoginOpen(!isAccountModalLoginOpen);
  };
  return (
    <>
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
      <motion.div
        className={styles.modal}
        animate={isMobileMenuClose ? 'open' : 'closed'}
        variants={variants}
      >
        {pageLinksArray.slice(0, 2).map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={styles.modal__link}
            onClick={mobileMenuHandler}
          >
            {link.title}
          </Link>
        ))}
        <button
          type="button"
          onClick={accountModalHandler}
          className={`${styles.link} ${styles.link__button} ${styles.modal__link}`}
        >
          My account
        </button>
        <button
          type="button"
          onClick={currencyModalHandler}
          className={`${styles.modal__link} ${styles.modal__currency}`}
        >
          {`Split currency / ${selectedCurrency}`}
        </button>
        <div className={styles.modal__social}>
          <Image 
            src={MenuMobileEUR}
            alt="MenuMobileEUR"
            width={40}
            height={40}
          />
          <Image 
            src={MenuMobileGBP}
            alt="MenuMobileGBP"
            width={40}
            height={40}
          />
          <Image 
            src={MenuMobileUSD}
            alt="MenuMobileUSD"
            width={40}
            height={40}
          />
          <Image 
            src={MenuMobileNOK}
            alt="MenuMobileNOK"
            width={40}
            height={40}
          />
        </div>
        <div className={styles.contact}>
          <p className={styles.contact__title}>Contact</p>
          <p className={styles.contact__phone}>+380632345521</p>
          <Link href='mailto:info@norseyacht.com' className={styles.contact__email}>info@norseyacht.com</Link>
        </div>
        <div className={styles.follow}>
          <p className={styles.follow__title}>Follow us</p>
          <div className={styles.follow__social}>
            <Image 
              src={FollowInstagram}
              alt="FollowInstagram"
              width={40}
              height={40}
            />
            <Image 
              src={FollowTelegram}
              alt="FollowTelegram"
              width={40}
              height={40}
            />
            <Image 
              src={FollowWhatsApp}
              alt="FollowWhatsApp"
              width={40}
              height={40}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MenuMobileModal;
