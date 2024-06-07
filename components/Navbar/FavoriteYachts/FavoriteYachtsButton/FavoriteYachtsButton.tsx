import styles from '@/components/Navbar/navbar.module.scss';

type Props = {
  countYachts: number | null;
};

const FavoriteYachtsButton = ({ countYachts }: Props) => {
  if (!countYachts) {
    return;
  }

  return (
    <button className={`${styles.link} ${styles.favourite_iconActive}`}>
      <span>{countYachts > 0 && countYachts}</span>
    </button>
  );
};

export default FavoriteYachtsButton;
