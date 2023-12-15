'use client';
import React, { FormEvent } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './contactForm.module.scss'

const ContactForm = () => {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [message, setMessage] = useState('');

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input title='email' inputType='email' />
      <Input title='name' inputType='text' />
      <Input title='message' inputType='' textarea />
      {/* <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /> */}

      {/* <label htmlFor="name">Name</label>
      <input
        id="name"
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /> */}

      {/* <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      /> */}

      {/* <button type="submit">Send message</button> */}
      <span>
        <Button text='Send message' linkTo='/' />
      </span>
    </form>
  )
}

export default ContactForm;
