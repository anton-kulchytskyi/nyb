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

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!inputs.name.trim()) {
      newErrors.name = 'Name is a required field';
    } else if (!/^[a-zA-Z]+$/.test(inputs.name)) {
      newErrors.name = 'The name must contain only letters';
    } else if (inputs.name.length > 30) {
      newErrors.name = 'The name must not be longer than 30 characters';
    }

    if (!inputs.userEmail.trim()) {
      newErrors.userEmail = 'Email is a required field';
    } else if (!/\S+@\S+\.\S+/.test(inputs.userEmail)) {
      newErrors.userEmail = 'Enter a valid email';
    }

    if (!inputs.message.trim()) {
      newErrors.message = 'The message field is required';
    } else if (inputs.message.length > 5000) {
      newErrors.message =
        'The message field should not be longer than 5000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitFormButtonControl = (): boolean => {
    return !(
      inputs.name.trim() !== '' &&
      inputs.userEmail.trim() !== '' &&
      inputs.message.trim() !== '' &&
      Object.keys(errors).length === 0
    );
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      //eslint-disable-next-line
      console.log(JSON.stringify(inputs));
      // Send data to server in JSON format
      // const data = await fetch(
      //   'https://nyb-project-production.up.railway.app/contact',
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(inputs),
      //   }
      // );

      //eslint-disable-next-line
      // console.log(data.status === 200);

      setIsContactFormModalOpen(!isContactFormModalOpen);

      setInputs({
        name: '',
        userEmail: '',
        message: '',
      });
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
            className={styles.input}
            onChange={handleChange}
          />
          <label
            className={styles.label}
            htmlFor="name"
          >
            Your name
          </label>
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className={styles.form_group}>
          <input
            id="email"
            name="userEmail"
            type="email"
            value={inputs.userEmail}
            className={styles.input}
            onChange={handleChange}
          />
          <label
            className={styles.label}
            htmlFor="email"
          >
            Your email
          </label>
          {errors.userEmail && <p>{errors.userEmail}</p>}
        </div>
        <div className={styles.form_group}>
          <textarea
            id="message"
            name="message"
            value={inputs.message}
            className={`${styles.input} ${styles.input__textarea}`}
            onChange={handleChange}
          />
          <label
            className={styles.label}
            htmlFor="message"
          >
            Your message
          </label>
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={submitFormButtonControl()}
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
