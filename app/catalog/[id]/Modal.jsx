import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Close from '@/public/icons/close.svg';
import typo from '@/styles/typography.module.scss';
import SocialMediaIcons from '@/components/SocialMediaIcons/SocialMediaIcons';
import styles from './Modal.module.scss';

const Modal = ({
  showModalGallery,
  setShowModalGallery,
  images,
  ves,
}) => {
  const pathname = usePathname();
  const color = '#E7801A';

  const myFullscreenComponent = useRef();

  const openContentFullscreen = () => {
    const element = myFullscreenComponent.current;
    if (element && element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <div
      ref={myFullscreenComponent}
      className={`${styles.modal} ${showModalGallery ? styles.open : ''}`}
    >
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__content}>
          <button onClick={openContentFullscreen}>full screen</button>
          <div className="">
            <Link
              href={pathname}
              onClick={() => setShowModalGallery(!showModalGallery)}
              className={styles.close}
            >
              <Image
                src={Close}
                alt="Close"
              />
            </Link>
            <h4 className={typo.typo_h4}>Gallery</h4>
          </div>
          <div className={styles.gallery__container}>
            <div className={styles.gallery_small}>
              {images.map((img, index) => (
                <a href={`#${index}`} key={index}>
                  <img
                    src={img}
                    alt="vessel"
                    className={styles.gallery__image_small}
                  />
                </a>
              ))}
            </div>
            <div className={styles.gallery}>
              {images.map((img, index) => (
                <img
                  id={index}
                  key={index}
                  src={img}
                  alt="vessel"
                  className={styles.gallery__image}
                />
              ))}
            </div>
            <div className={styles.social}>
              <span className={typo.typo_description_gray}>{ves.vessel_make} {ves.vessel_year}</span>
              <SocialMediaIcons color={color} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
