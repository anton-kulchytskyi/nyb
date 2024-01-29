'use client';
import { useLayoutEffect, useRef, useState } from 'react';

import typo from '@/styles/typography.module.scss';

import { reviewUser } from '@/interfaces/reviewsUsers.interface';
import { users } from '@/utils/reviewsUsers/reviewsUsers';

import LeftArrow from '@/components/SvgIconsComponents/LeftArrowSvg';
import RightArrow from '@/components/SvgIconsComponents/RightArrowSvg';

import ReviewCard from '@/components/ReviewsSection/ReviewsCard/ReviewCard';
import styles from './reviewsSection.module.scss';

const ReviewsSection = () => {
  const [transition, setTransition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const maxCarouselWidth = 84.5;
  const transitionValue = 20;
  const [currentCarouselWidth, setCurrentCarouselWidth] = useState(0);
  useLayoutEffect(() => {
    setCurrentCarouselWidth((ref.current?.clientWidth as number) / 16);
  }, []);

  const right = () => {
    let newTransition = transition;
    newTransition += transitionValue;
    if (newTransition > maxCarouselWidth - currentCarouselWidth) {
      newTransition = maxCarouselWidth - currentCarouselWidth;
    }
    setTransition(newTransition);
  };

  const left = () => {
    let newTransition = transition;
    newTransition -= transitionValue;
    if (newTransition < 0) {
      newTransition = 0;
    }
    setTransition(newTransition);
  };

  return (
    <section
      id="reviews"
      className={styles.review_section}
    >
      <h3 className={`${typo.typo_h3} ${typo.typo_h3_gray}`}>Reviews</h3>
      <div className={styles.carousel_wrapper}>
        <div
          ref={ref}
          style={{ transform: `translate(-${transition}rem)` }}
          className={styles.cards_container}
        >
          {users.map((user: reviewUser) => (
            <ReviewCard
              key={user.userId}
              userName={user.userName}
              userAvatar={user.userAvatar}
              date={user.date}
              stars={user.stars}
              reviewText={user.reviewText}
            />
          ))}
        </div>
      </div>
      <div className={styles.arrows_container}>
        <button
          className={styles.arrows_container__arrow}
          type="button"
          disabled={transition <= 0}
          onClick={left}
        >
          <LeftArrow color={transition > 0} />
        </button>
        <button
          className={styles.arrows_container__arrow}
          type="button"
          disabled={transition >= maxCarouselWidth - currentCarouselWidth}
          onClick={right}
        >
          <RightArrow
            color={transition < maxCarouselWidth - currentCarouselWidth}
          />
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
