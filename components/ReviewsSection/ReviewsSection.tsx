'use client';
import dynamic from 'next/dynamic';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
        modules={[Navigation]}
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
          1340: {
            slidesPerView: 4,
          },
          1760: {
            slidesPerView: 5,
          },
        }}
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
