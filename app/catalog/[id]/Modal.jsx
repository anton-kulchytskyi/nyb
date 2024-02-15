import { useRef, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Scrollbar } from 'swiper/modules';
import SwiperCore, { Mousewheel } from "swiper/core";
SwiperCore.use([Mousewheel]);

import Close from '@/public/icons/close.svg';
import SocialMediaIcons from '@/components/SocialMediaIcons/SocialMediaIcons';

import { useCurrency } from '@/context/CurrencyContext';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import typo from '@/styles/typography.module.scss';
import styles from './Modal.module.scss';

const Modal = ({
  showModalGallery,
  setShowModalGallery,
  images,
  ves,
}) => {
  const color = '#E7801A';
  const modalFullScreen = useRef();
  const openContentFullscreen = () => {
    const element = modalFullScreen.current;
    if (element && element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  const {
    selectedCurrency,
    selectedCurrencySymbol
  } = useCurrency();
  const key = `vessel_price_${selectedCurrency}`;
  const currPrice = (+ves[key]).toLocaleString('en-US');
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div
      ref={modalFullScreen}
      className={`${styles.modal} ${showModalGallery ? styles.open : ''}`}
    >
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__content}>
          <div className={styles.gallery__container}>
            <div className={styles.gallery_small}>
              <Swiper
                direction={'vertical'}
                slidesPerView={8}
                freeMode={true}
                onRealIndexChange={(element) => setActiveIndex(element.clickedIndex)}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index} >
                    <a href={`#${index}`} className={styles.slider__image_small__container}>
                      <img
                        src={img}
                        alt="vessel"
                        className={`${styles.slider__image_small} ${activeIndex === index ? styles.active : ''}`}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.gallery}>
              <Swiper
                modules={[FreeMode, Scrollbar, Pagination]}
                direction={'vertical'}
                slidesPerView={'auto'}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
              >
                <SwiperSlide className={styles.slider__image__container}>
                  {images.map((img, index) => (
                    <img
                      key={index}
                      id={index}
                      src={img}
                      alt="vessel"
                      className={styles.slider__image}
                    />
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.social}>
              <div className={styles.social__top}>
                <button onClick={openContentFullscreen}>Full Screen</button>
                <Image
                  width={24}
                  height={24}
                  onClick={() => setShowModalGallery(!showModalGallery)}
                  src={Close}
                  alt="Close"
                  className={styles.social__button}
                />
              </div>
              <div className={styles.social__middle}>
                <SocialMediaIcons color={color} />
              </div>
              <div className={styles.social__bottom}>
                <p className={styles.social__name}>{ves.vessel_make}, {ves.vessel_year}</p>
                <p className={styles.social__country}>{ves.vessel_country}, {ves.vessel_town}</p>
                <p className={typo.typo_price}>{selectedCurrencySymbol} {currPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
