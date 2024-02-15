'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Errors } from '@/interfaces/errors.interface';
import { useCurrency } from '@/context/CurrencyContext';
import QuestionMarkSvg from '@/components/SvgIconsComponents/QuestionMarkSvg';
import ContactFormModal from '@/components/ContactForm/ContactFormModal/ContactFormModal';
import { Vessel } from '@/interfaces/vessel.interface';
import typo from '../../../styles/typography.module.scss';
import Slider from './Slider';
import styles from './VesselView.module.scss';
import Modal from './Modal';


type Props = {
  ves: Vessel,
  images: string[],
}

export const VesselView: React.FC<Props> = ({ ves, images }) => {
  const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);
  const [showModalGallery, setShowModalGallery] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const {
    selectedCurrency,
    selectedCurrencySymbol
  } = useCurrency();
  const [inputs, setInputs] = useState({
    name: '',
    userEmail: '',
    message: '',
  });
  const key = `vessel_price_${selectedCurrency}`;
  const currPrice = (+ves[key]).toLocaleString('en-US');

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
      setIsContactFormModalOpen(!isContactFormModalOpen);
      if (data.status === 200) {
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

  // const modalFullScreen = useRef();

  const openContentFullscreen = () => {
    const element = document.getElementById('modal');
    if (element && element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.body}>
          <div className={styles.body__top}>
            <span className={typo.typo_h4}>{ves.vessel_make} {ves.vessel_model}, {ves.vessel_year}, {ves.vessel_country}, {ves.vessel_town}</span>
            <span className={typo.typo_price}>{`${selectedCurrencySymbol} ${currPrice}`}</span>
          </div>
          <div className={styles.body__gallery} >
            <Slider
              openContentFullscreen={openContentFullscreen}
              images={images}
              setShowModalGallery={setShowModalGallery}
            />
          </div>
          <div className={styles.body__bottom}>
            <h1 className={typo.typo_h4}>About</h1>
            <div className={styles.body__about}>
              <div className={styles.body__about_text}>
                <p>
                  Discover the epitome of maritime luxury with our stunning yacht, &quot;Ocean Serenity.&quot; This sleek and elegant vessel combines cutting-edge design with unparalleled comfort, offering a truly indulgent experience on the open seas. With a length of 120 feet and a beam of 28 feet, Ocean Serenity provides ample space for relaxation, entertainment, and exploration.<br />
                  Ocean Serenity boasts a modern, sophisticated design with a stylish exterior and luxurious interior finishes. From the moment you step on board, you are enveloped in an atmosphere of opulence and refinement.<br />
                  The interior spaces are meticulously designed, featuring high-quality materials and exquisite craftsmanship. The yacht accommodates up to 12 guests in 6 beautifully appointed cabins, each with ensuite bathrooms. The master suite is a sanctuary of comfort, offering panoramic views of the ocean and a private lounge area.<br />
                  Ocean Serenity offers a wide range of entertainment options, including a state-of-the-art home theater system, a well-stocked library, and a spacious lounge area. The outdoor deck features a Jacuzzi, perfect for unwinding under the sun or stars. Additionally, there is a fully equipped bar and grill for delightful al fresco dining experiences.
                </p>
              </div>
              <div className={styles.body__about_featchures}>
                <p className={styles.body__about_featch}><span>Price:</span><span>{`${selectedCurrencySymbol} ${currPrice}`}</span></p>
                <p className={styles.body__about_featch}><span>Year:</span><span>{ves.vessel_year}</span></p>
                <p className={styles.body__about_featch}><span>Country:</span><span>{ves.vessel_country}</span></p>
                <p className={styles.body__about_featch}><span>State:</span><span>{ves.vessel_town}</span></p>
                <p className={styles.body__about_featch}><span>Lengh Overall:</span><span>{ves.vessel_loa}</span></p>
                <p className={styles.body__about_featch}><span>Beam:</span><span>{ves.vessel_beam}</span></p>
                <p className={styles.body__about_featch}><span>Draft:</span><span>{ves.vessel_draft}</span></p>
                <p className={styles.body__about_featch}><span>Cabin:</span><span>{ves.vessel_cabin}</span></p>
                <p className={styles.body__about_featch}><span>Berth:</span><span>{ves.vessel_berth}</span></p>
                <p className={styles.body__about_featch}><span>Kell Type:</span><span>{ves.vessel_keel_type}</span></p>
                <p className={styles.body__about_featch}><span>Fuel Type:</span><span>{ves.vessel_fuel_type}</span></p>
                <p className={styles.body__about_featch}><span>Engine Quantity:</span><span>{ves.vessel_engine}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form_container}>
          <div className={styles.form_top}>
            <span>VAT Included</span> <span className={styles.form_modal}><QuestionMarkSvg /></span>
          </div>
          <form
            onSubmit={submitHandler}
            className={styles.form}
          >
            <h3 className={`${typo.typo_h4} ${styles.form_header}`}>Contact us</h3>
            <div className={styles.form_group}>
              <input
                id="name"
                name="name"
                type="text"
                value={inputs.name}
                className={`${styles.input} ${errors.name ? styles.input__error : ''}
              ${inputs.name.trim() && !errors.name ? styles.input__success : ''}
            `}
                onChange={handleChange}
                onFocus={inputsOnFocus}
                onBlur={checkNameInput}
                placeholder='Your name'
              />
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
              ${inputs.userEmail.trim() && !errors.userEmail ? styles.input__success : ''}
              `}
                onChange={handleChange}
                onFocus={inputsOnFocus}
                onBlur={checkEmailInput}
                placeholder='Your email'
              />
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
              ${inputs.message.trim() && !errors.message ? styles.input__success : ''}
              `}
                onChange={handleChange}
                onFocus={inputsOnFocus}
                onBlur={checkMessageInput}
                placeholder="Hello, I'd like to learn more about your services"
              />
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
        </div>
        {isContactFormModalOpen && (
          <ContactFormModal
            isContactFormModalOpen={isContactFormModalOpen}
            setIsContactFormModalOpen={setIsContactFormModalOpen}
          />
        )}
        {showModalGallery && (
          <Modal
            showModalGallery={showModalGallery}
            setShowModalGallery={setShowModalGallery}
            images={images}
            ves={ves}
            openContentFullscreen={openContentFullscreen}
          />
        )}
      </div>
    </>
  );
};

export default VesselView;
