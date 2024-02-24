/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { Vessel } from '@/interfaces/vessel.interface';
import Close from '@/public/icons/close.svg';
import SocialMediaIcons from '@/components/SocialMediaIcons/SocialMediaIcons';
import { useCurrency } from '@/context/CurrencyContext';

import 'swiper/css';
import 'swiper/css/free-mode';

import typo from '@/styles/typography.module.scss';
import styles from './Modal.module.scss';

type Props = {
  showModalGallery: boolean;
  setShowModalGallery: Dispatch<SetStateAction<boolean>>;
  images: string[];
  ves: Vessel;
};

const Modal = ({
  showModalGallery,
  setShowModalGallery,
  images,
  ves,
}: Props) => {
  const { selectedCurrency, selectedCurrencySymbol } = useCurrency();
  const key = `yacht_price_${selectedCurrency}`;
  const currPrice = (+ves[key]).toLocaleString('en-US');

  return (
    <div
      className={`${styles.modal} ${showModalGallery ? styles.open : ''}`}
      id="modal"
    >
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__content}>
          <div className={styles.gallery__container}>
            <div className={styles.gallery_small}>
              <Swiper
                modules={[FreeMode, Scrollbar, Mousewheel]}
                direction={'vertical'}
                slidesPerView={'auto'}
                freeMode={true}
                scrollbar={true}
              >
                <SwiperSlide>
                  {images.map((img, index) => (
                    <a
                      href={`#${index}`}
                      key={index}
                      className={styles.slider__image_small__container}
                    >
                      <img
                        src={img}
                        alt="yacht"
                        className={styles.slider__image_small}
                      />
                    </a>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>

            <div className={styles.gallery}>
              <Swiper
                modules={[FreeMode, Scrollbar, Mousewheel]}
                freeMode={true}
                scrollbar={true}
                grabCursor={true}
              >
                <SwiperSlide className={styles.slider__image__container}>
                  {images.map((img, index) => (
                    <img
                      key={index}
                      id={String(index)}
                      src={img}
                      alt="yacht"
                      className={styles.slider__image}
                    />
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>

            <div className={styles.social}>
              <div className={styles.social__top}>
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
                <SocialMediaIcons color="#E7801A" />
              </div>
              <div className={styles.social__bottom}>
                <p className={styles.social__name}>
                  {ves.yacht_make}, {ves.yacht_year}
                </p>
                <p className={styles.social__country}>
                  {ves.yacht_country}, {ves.yacht_town}
                </p>
                <p className={typo.typo_price}>
                  {selectedCurrencySymbol} {currPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
