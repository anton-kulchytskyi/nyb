'use client';
import dynamic from 'next/dynamic';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';

import { reviewUser } from '@/interfaces/reviewsUsers.interface';
import { users } from '@/utils/reviewsUsers/reviewsUsers';

const ReviewCardNoSSR = dynamic(
  () => import('@/components/ReviewsSection/ReviewsCard/ReviewCard'),
  { ssr: false }
);

import typo from '@/styles/typography.module.scss';
import styles from './reviewsSection.module.scss';

const ReviewsSection = () => {
  return (
    <section className={styles.review_section}>
      <h3 className={`${typo.typo_h3} ${typo.typo_h3_gray}`}>Reviews</h3>
      <Swiper
        navigation={true}
        loop={true}
        freeMode={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          712: {
            slidesPerView: 2,
          },
          1056: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
          1744: {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Navigation]}
        className="reviewsSwiper"
      >
        {users.map((user: reviewUser) => (
          <SwiperSlide key={user.userId}>
            <ReviewCardNoSSR
              sliderIdx={user.sliderIdx}
              userName={user.userName}
              userAvatar={user.userAvatar}
              date={user.date}
              stars={user.stars}
              reviewText={user.reviewText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewsSection;
