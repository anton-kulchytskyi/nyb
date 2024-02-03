/* eslint-disable @stylistic/indent */
'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import { Errors } from '@/interfaces/errors.interface';
import styles from './contactForm.module.scss';
import ContactFormModal from './ContactFormModal/ContactFormModal';

const ContactForm = () => {
  const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    userEmail: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const checkNameInput = () => {
    let data: string = '';
    if (!inputs.name.trim()) {
      data = 'Name is a required field';
    } else if (!/^[a-zA-Z\s]+$/.test(inputs.name)) {
      data = 'The name must contain only letters';
    } else if (inputs.name.length > 30) {
      data = 'The name must not be longer than 30 characters';
    }
    data.length && setErrors((prev) => ({ ...prev, name: data }));
  };

  const checkEmailInput = () => {
    let data: string = '';
    if (!inputs.userEmail.trim()) {
      data = 'Email is a required field';
    } else if (!/\S+@\S+\.\S+/.test(inputs.userEmail)) {
      data = 'Enter a valid email';
    }

    data.length && setErrors((prev) => ({ ...prev, userEmail: data }));
  };

  const checkMessageInput = () => {
    let data: string = '';
    if (!inputs.message.trim()) {
      data = 'The message field is required';
    } else if (inputs.message.length > 5000) {
      data = 'The message field should not be longer than 5000 characters';
    }
    data.length && setErrors((prev) => ({ ...prev, message: data }));
  };

  const validateForm = () => {
    checkNameInput();
    checkEmailInput();
    checkMessageInput();

    return Object.keys(errors).length === 0;
  };

  const inputsOnFocus = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    for (const error in errors) {
      if (error === e.target.name) {
        setErrors({
          ...errors,
          [error]: '',
        });
      }
    }
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Send data to server in JSON format
      const data = await fetch(
        'https://nyb-project-production.up.railway.app/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        }
      );

      // eslint-disable-next-line
      console.log(data.status === 200);

      if (data.status === 200) {
        setIsContactFormModalOpen(!isContactFormModalOpen);
        setInputs({
          name: '',
          userEmail: '',
          message: '',
        });
      } else {
        // eslint-disable-next-line
        console.log(data);
      }
    }
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className={styles.form}
      >
        <div className={styles.form_group}>
          <input
            id="name"
            name="name"
            type="text"
            value={inputs.name}
            className={`${styles.input} ${
              errors.name ? styles.input__error : ''
            }
            ${inputs.name.trim() && !errors.name ? styles.input__success : ''}
            `}
            onChange={handleChange}
            onFocus={inputsOnFocus}
            onBlur={checkNameInput}
          />
          <label
            className={styles.label}
            htmlFor="name"
          >
            Your name
          </label>
          {errors.name && (
            <span className={styles.error_message}>{errors.name}</span>
          )}
        </div>
        <div className={styles.form_group}>
          <input
            id="email"
            name="userEmail"
            type="email"
            value={inputs.userEmail}
            className={`
              ${styles.input}
              ${errors.userEmail && styles.input__error} 
              ${
                inputs.userEmail.trim() && !errors.userEmail
                  ? styles.input__success
                  : ''
              }`}
            onChange={handleChange}
            onFocus={inputsOnFocus}
            onBlur={checkEmailInput}
          />
          <label
            className={styles.label}
            htmlFor="email"
          >
            Your email
          </label>
          {errors.userEmail && (
            <span className={styles.error_message}>{errors.userEmail}</span>
          )}
        </div>
        <div className={styles.form_group}>
          <textarea
            id="message"
            name="message"
            value={inputs.message}
            className={`
              ${styles.input}
              ${styles.input__textarea}
              ${errors.message && styles.input__textarea_error} 
              ${
                inputs.message.trim() && !errors.message
                  ? styles.input__success
                  : ''
              }`}
            onChange={handleChange}
            onFocus={inputsOnFocus}
            onBlur={checkMessageInput}
          />
          <label
            className={styles.label}
            htmlFor="message"
          >
            Your message
          </label>
          {errors.message && (
            <span className={styles.error_message}>{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className={styles.submit}
        >
          Send message
        </button>
      </form>
      {isContactFormModalOpen && (
        <ContactFormModal
          isContactFormModalOpen={isContactFormModalOpen}
          setIsContactFormModalOpen={setIsContactFormModalOpen}
        />
      )}
    </>
  );
};

export default ContactForm;
