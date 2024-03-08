import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Close from '@/public/icons/close.svg';

import styles from './accountModal.module.scss';

type Props = {
  toggleBetweenModals: () => void;
  isAccountModalOpen: boolean;
  accountModalHandler: () => void;
};

const AccountModal = ({ toggleBetweenModals, isAccountModalOpen, accountModalHandler }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${styles.modal} ${isAccountModalOpen ? styles.open : ''}`}
      >
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__top}>
              <h4 className={styles.header}>Create a new account</h4>
              <Link
                href={pathname}
                onClick={accountModalHandler}
                className={styles.close}
              >
                <Image
                  src={Close}
                  alt="Close"
                />
              </Link>
            </div>
            <div className={styles.modal__main}>
              <form className={styles.form}>
                <input
                  className={styles.form__input}
                  type="text"
                  name="Fname"
                  placeholder='First name'
                />
                <input
                  className={styles.form__input}
                  type="text"
                  name="Lname"
                  placeholder='Last name'
                />
                <input
                  className={styles.form__input}
                  type="email"
                  name="email"
                  placeholder='Email'
                />
                <input
                  className={styles.form__input}
                  type="password"
                  name="password"
                  placeholder='Password'
                />
              </form>
              <button className={styles.form__button}>Create a new account</button>
              <div className={styles.border}>
                <span className={styles.border__text}>or continue with</span>
                <p className={styles.border__line} />
              </div>
            </div>
            <div className={styles.modal__bottom}>
              <div className={styles.socials}>
                <div className={styles.socials__container}>
                  <button className={styles.socials__facebook} />
                </div>
                <div className={styles.socials__container}>
                  <button className={styles.socials__google} />
                </div>
                <div className={styles.socials__container}>
                  <button className={styles.socials__apple} />
                </div>
              </div>
              <p className={styles.account}>
                <span>Already have an account? </span>
                <span
                  onClick={toggleBetweenModals}
                  className={styles.account__login}
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountModal;
