import typo from '@/styles/typography.module.scss';

import { users } from '@/utils/reviewUsers/reviewUses';
import { Any } from '@/interfaces/any.type';

import user_1 from '@/public/reviews_persons_icons/person_1.png';
import user_2 from '@/public/reviews_persons_icons/person_2.png';
import user_3 from '@/public/reviews_persons_icons/person_3.png';
import user_4 from '@/public/reviews_persons_icons/person_4.png';

import ReviewCard from '../ReviewsCard/ReviewCard';
import styles from './reviewsSection.module.scss';

const usersAvatar = [user_1, user_2, user_3, user_4];

const ReviewsSection = () => {
  return (
    <section className={styles.review_section}>
      <h3 className={`${typo.typo_h3} ${typo.typo_h3__gray}`}>Reviews</h3>
      <div className={styles.cards_container}>

        {users.map((user: Any, i) => (
          <ReviewCard
            key={user.userId}
            user={user}
            avatar={usersAvatar[i]}
          />
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection;
