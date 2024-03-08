import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Close from '@/public/icons/close.svg';

import styles from './loginModal.module.scss';

type Props = {
  isAccountModalLoginOpen: boolean;
  accountModalLoginHandler: () => void;
};

const LoginModal = ({ isAccountModalLoginOpen, accountModalLoginHandler }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${styles.modal} ${isAccountModalLoginOpen ? styles.open : ''}`}
      >
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__top}>
              <h4 className={styles.header}>Sign In</h4>
              <Link
                href={pathname}
                onClick={accountModalLoginHandler}
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
              <button className={styles.form__button}>Sign In</button>
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
                <span>Don&apos;t have an account yet? </span>
                <span className={styles.account__login}>Create a new account</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
