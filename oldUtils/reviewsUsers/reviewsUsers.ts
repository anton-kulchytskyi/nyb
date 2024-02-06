import user_1_avatar from '@/public/reviews_persons_icons/person_1.png';
import user_2_avatar from '@/public/reviews_persons_icons/person_2.png';
import user_3_avatar from '@/public/reviews_persons_icons/person_3.png';
import user_4_avatar from '@/public/reviews_persons_icons/person_4.png';
import { reviewUser } from '@/interfaces/reviewsUsers.interface';

type Avatar = Pick<reviewUser, 'userAvatar' | 'userName'>;

const avatars: Avatar[] = [
  {
    userAvatar: user_1_avatar,
    userName: 'Amanda Nori',
  },
  {
    userAvatar: user_2_avatar,
    userName: 'Monika Tailor',
  },
  {
    userAvatar: user_3_avatar,
    userName: 'Artem Lacaso',
  },
  {
    userAvatar: user_4_avatar,
    userName: 'Kevin Mare',
  },
];

const reviewText =
  'Buying a yacht through your service was the best decision in my life. Not only did you provide us with the best selection of yachts, but you also provided us with excellent service every step of the way. Our new yacht exceeded all our expectations and allowed us to discover the world of sea travel.';

export const users: reviewUser[] = avatars.map((user, i) => ({
  ...user,
  userId: i + 1,
  date: new Date().toLocaleDateString('en-GB'),
  stars: Math.round(Math.random() * 5),
  reviewText: i % 2 ? reviewText : reviewText.split('.').slice(0, 2).join('.'),
}));
