'use client';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import styles from './Slider.module.scss';

const Slider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const { yacht_id } = ves;

  // const router = useRouter();
  // const routeToVessel = () => {
  //   router.push(`/catalogue/${yacht_id}/gallery`);
  // };

  return (
    <div>
      <div className={styles.container}>
        <Swiper
          navigation={true}
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className={styles.slide__container}
          grabCursor={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                height={650}
                width={1036}
                src={img}
                alt="vessel"
                className={styles.slide}
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
          grabCursor={true}
          modules={[Thumbs, FreeMode]}
          className={styles.slide__thumb__container}
        >
          <SwiperSlide>
            {/* <button
              onClick={routeToVessel}
              className={styles.button}
            >
              Gallery
              <br />
              {images.length} photos
            </button> */}
          </SwiperSlide>
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                width={127}
                height={95}
                src={img}
                alt="vessel"
                className={styles.slide__thumb}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
