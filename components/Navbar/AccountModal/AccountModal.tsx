import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Close from '@/public/icons/close.svg';
import { Errors } from '@/interfaces/errors.interface';

import styles from './accountModal.module.scss';

type Props = {
  toggleBetweenModals: () => void;
  isAccountModalOpen: boolean;
  accountModalHandler: () => void;
};

const AccountModal = ({ toggleBetweenModals, isAccountModalOpen, accountModalHandler }: Props) => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    userEmail: '',
    password: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [type, setType] = useState('password');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const checkFirstNameInput = () => {
    let data: string = '';
    if (!inputs.firstName.trim()) {
      data = 'The first name field is required';
    } else if (!/^[a-zA-Zа-яА-ЯіёЁĀ-žŠĐŽČćžšđčŚŹŃĄĘŚŁŻĆŹńąęśłżćźÆØÅæøå\s]+$/.test(inputs.firstName)) {
      data = 'The first name must contain only letters';
    } else if (inputs.firstName.length < 4) {
      data = 'The first name must longer than 3 characters';
    } else if (inputs.firstName.length > 30) {
      data = 'The first name must not be longer than 30 characters';
    }

    data.length && setErrors((prev) => ({ ...prev, firstName: data }));
  };

  const checkLastNameInput = () => {
    let data: string = '';
    if (!inputs.lastName.trim()) {
      data = 'The last name field is required';
    } else if (
      !/^[a-zA-Zа-яА-ЯіёЁĀ-žŠĐŽČćžšđčŚŹŃĄĘŚŁŻĆŹńąęśłżćźÆØÅæøå\s]+$/.test(
        inputs.lastName
      )
    ) {
      data = 'The name must contain only letters';
    } else if (inputs.lastName.length < 4) {
      data = 'The last name must longer than 3 characters';
    } else if (inputs.lastName.length > 30) {
      data = 'The last name must not be longer than 30 characters';
    }
    data.length && setErrors((prev) => ({ ...prev, lastName: data }));
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

  const togglePassword = () => {
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => { document.body.style.overflow = 'scroll' };
  }, [])

  return (
    <>
      <div className={`${styles.modal} ${isAccountModalOpen ? styles.open : ''}`}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div
              onClick={accountModalHandler}
              className={styles.close}
            >
              <Image
                src={Close}
                alt="Close"
              />
            </div>
            <div className={styles.modal__top}>
              <h4 className={styles.header}>Create a new account</h4>
            </div>
            <div className={styles.modal__main}>
              <form className={styles.form}>
                <div className={styles.form_group}>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={inputs.firstName}
                    className={`
                      ${styles.input} 
                      ${errors.firstName ? styles.input__error : ''}
                      ${inputs.firstName.trim() && !errors.firstName ? styles.input__success : ''}
                    `}
                    onChange={handleChange}
                    onFocus={inputsOnFocus}
                    onBlur={checkFirstNameInput}
                  />
                  <label
                    className={styles.label}
                    htmlFor="firstName"
                  >
                    First name
                  </label>
                  {errors.firstName && (
                    <span className={styles.error_message}>{errors.firstName}</span>
                  )}
                </div>
                <div className={styles.form_group}>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={inputs.lastName}
                    className={`
                      ${styles.input} 
                      ${errors.lastName ? styles.input__error : ''}
                      ${inputs.lastName.trim() && !errors.lastName ? styles.input__success : ''}
                    `}
                    onChange={handleChange}
                    onFocus={inputsOnFocus}
                    onBlur={checkLastNameInput}
                  />
                  <label
                    className={styles.label}
                    htmlFor="lastName"
                  >
                    Last name
                  </label>
                  {errors.lastName && (
                    <span className={styles.error_message}>{errors.lastName}</span>
                  )}
                </div>
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
                    type={type}
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
                  <span
                    className={`${styles.label__password} ${type === 'password' ? styles.eye : styles.eyeOff}`}
                    onClick={togglePassword}
                  />
                  {errors.password && (
                    <span className={styles.error_message}>{errors.password}</span>
                  )}
                </div>
              </form>
              <p className={styles.form_terms}>
                By signing in or creating an account, you agree to our{' '}
                <Link href='/terms-of-use' className={styles.form_terms__link} onClick={accountModalHandler} >
                  Terms and conditions
                </Link>{' '}
                and{' '}
                <Link href='/privacy-policy' className={styles.form_terms__link} onClick={accountModalHandler} >
                  Privacy policy and cookies.
                </Link>
              </p>
              <button className={styles.form__button}>Create a new account</button>
              <div className={styles.border}>
                <span className={styles.border__text}>or continue with</span>
                <p className={styles.border__line} />
              </div>
            </div>
            <div className={styles.modal__bottom}>
              <div className={styles.socials}>
                <div className={styles.socials__container}>
                  <button
                    className={`${styles.socials__link} ${styles.socials__facebook}`}
                  />
                </div>
                <div className={styles.socials__container}>
                  <button
                    className={`${styles.socials__link} ${styles.socials__google}`}
                  />
                </div>
                <div className={styles.socials__container}>
                  <button
                    className={`${styles.socials__link} ${styles.socials__apple}`}
                  />
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
