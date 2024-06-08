import styles from '@/components/Navbar/navbar.module.scss';
import { useFavourite } from '@/context/FavouriteYachtsContext';

type Props = {
  countYachts: number;
};

const FavoriteYachtsButton = ({ countYachts }: Props) => {
  const { favouriteModalHandler } = useFavourite();

  return (
    <button
      className={`${styles.link} ${styles.favourite_iconActive}`}
      onClick={favouriteModalHandler}
    >
      <span>{countYachts > 0 && countYachts}</span>
    </button>
  );
};

export default FavoriteYachtsButton;
