'use client'

import { useState } from "react";
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

import styles from './Slider.module.scss';


const Slider = ({ images, setShowModalGallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className={styles.container}>

        <Swiper
          modules={[Navigation, Thumbs, FreeMode]}
          spaceBetween={10}
          loop={true}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className={styles.slide__container}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                height={650}
                width={1036}
                src={img}
                alt="vessel"
                className={styles.slide}
                onClick={() => setShowModalGallery(true)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs, FreeMode]}
          className={styles.slide__thumb__container}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                width={127}
                height={95}
                src={img}
                alt="vessel"
                className={`${styles.slide__thumb} ${thumbsSwiper === 0 ? styles.active : ''}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
