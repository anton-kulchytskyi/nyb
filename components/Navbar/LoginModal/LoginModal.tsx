import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { Errors } from '@/interfaces/errors.interface';
import Close from '@/public/icons/close.svg';

import styles from './loginModal.module.scss';

type Props = {
  toggleBetweenModals: () => void;
  isAccountModalLoginOpen: boolean;
  accountModalLoginHandler: () => void;
};

const LoginModal = ({ toggleBetweenModals, isAccountModalLoginOpen, accountModalLoginHandler }: Props) => {
  const [inputs, setInputs] = useState({
    userEmail: '',
    password: '',
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const inputsOnFocus = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    for (const error in errors) {
      if (error === e.target.name) {
        const correctedErrors = { ...errors };
        delete correctedErrors[error];
        setErrors(correctedErrors);
      }
    }
  };

  const checkEmailInput = () => {
    let data: string = '';
    if (!inputs.userEmail.trim()) {
      data = 'The email field is required';
    } else if (!/\S+@\S+\.\S+/.test(inputs.userEmail)) {
      data = 'The email is not valid';
    }

    data.length && setErrors((prev) => ({ ...prev, userEmail: data }));
  };

  const checkPasswordInput = () => {
    let data = '';
    if (!inputs.password.trim()) {
      data = 'The password field is required';
    } else if (inputs.password.length < 8) {
      data = 'The password must be at least 8 characters long';
    } else if (inputs.password.length > 50) {
      data = 'The password must not be longer than 50 characters';
    } else if (!/[A-Z]/.test(inputs.password) || !/[a-z]/.test(inputs.password)) {
      data = 'The password must contain at least one uppercase and one lowercase letter';
    }
    data.length && setErrors((prev) => ({ ...prev, password: data }));
  };

  return (
    <>
      <div className={`${styles.modal} ${isAccountModalLoginOpen ? styles.open : ''}`}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__top}>
              <h4 className={styles.header}>Sign In</h4>
              <div
                onClick={accountModalLoginHandler}
                className={styles.close}
              >
                <Image
                  src={Close}
                  alt="Close"
                />
              </div>
            </div>
            <div className={styles.modal__main}>
              <form className={styles.form}>
                <div className={styles.form_group}>
                  <input
                    id="userEmail"
                    name="userEmail"
                    type="email"
                    value={inputs.userEmail}
                    className={`
                      ${styles.input} 
                      ${errors.userEmail ? styles.input__error : ''}
                      ${inputs.userEmail.trim() && !errors.userEmail ? styles.input__success : ''}
                    `}
                    onChange={handleChange}
                    onFocus={inputsOnFocus}
                    onBlur={checkEmailInput}
                  />
                  <label
                    className={styles.label}
                    htmlFor="userEmail"
                  >
                    Email
                  </label>
                  {errors.userEmail && (
                    <span className={styles.error_message}>{errors.userEmail}</span>
                  )}
                </div>
                <div className={styles.form_group}>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={inputs.password}
                    className={`
                      ${styles.input} 
                      ${errors.password ? styles.input__error : ''}
                      ${inputs.password.trim() && !errors.password ? styles.input__success : ''}
                    `}
                    onChange={handleChange}
                    onFocus={inputsOnFocus}
                    onBlur={checkPasswordInput}
                  />
                  <label
                    className={styles.label}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  {errors.password && (
                    <span className={styles.error_message}>{errors.password}</span>
                  )}
                </div>
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
                  <button

                    className={styles.socials__google}
                  />
                </div>
                <div className={styles.socials__container}>
                  <button className={styles.socials__apple} />
                </div>
              </div>
              <p className={styles.account}>
                <span>Don&apos;t have an account yet? </span>
                <span
                  onClick={toggleBetweenModals}
                  className={styles.account__login}
                >
                  Create a new account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
