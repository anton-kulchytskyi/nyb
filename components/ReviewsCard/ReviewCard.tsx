import Image, { StaticImageData } from "next/image";
import StarImg from '@/public/icons/star.svg';
import QuotesImg from '@/public/icons/quotes.svg';

import { Any } from '@/interfaces/any.type';

// import user_1 from '@/public/reviews_persons_icons/person_1.png';
// import user_2 from '@/public/reviews_persons_icons/person_2.png';
// import user_3 from '@/public/reviews_persons_icons/person_3.png';
// import user_4 from '@/public/reviews_persons_icons/person_4.png';

import styles from "./reviewCard.module.scss";


const numbers = [1, 2, 3, 4, 5];

interface Props {
  user: Any;
  avatar: StaticImageData;
}

const ReviewCard = ({ user,avatar }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        {numbers.map((number) => (
          <Image
            key={number}
            src={StarImg}
            alt='Star Image'
          />
        ))}
        <p className={styles.container__text_review}>
          {user.reviewText}
        </p>
        <div className={styles.container__text_quotes}>
          <Image
            src={QuotesImg}
            alt='QuotesImg'
          />
        </div>
      </div>
      <div className={styles.container__avatar}>
        <Image
          src={avatar}
          alt='user'
        />
        <div>
          <p className={styles.container__avatar_name}>
            {user.userName}
          </p>
          <p className={styles.container__avatar_date}>
            {user.date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard;
