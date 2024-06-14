import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/components/Navbar/navbar.module.scss';
import { useFavourite } from '@/context/FavouriteYachtsContext';
import { useModals } from '@/context/ModalsContext';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useAuth } from '@/context/AuthContext';

type Props = {
  children: React.ReactNode;
};

const FavoriteYachtsButton = ({ children }: Props) => {
  const [desktopScreen, setDesktopScreen] = useState(true);
  const { favouriteModalHandler } = useModals();
  const { favouriteList } = useFavourite();
  const { isAuthenticated } = useAuth();
  const favoriteYachtCount = favouriteList?.length ?? 0;
  const { width } = useWindowDimensions();

  useEffect(() => {
    const screen = (width as number) < 1200;
    setDesktopScreen(!screen);
  }, [width]);

  return (
    <div className={`${styles.favourite_popup}`}>
      <>
        {!desktopScreen && isAuthenticated && (
          <Link
            href="/"
            className={`${styles.link} ${styles.account_icon}`}
            onClick={favouriteModalHandler}
          ></Link>
        )}
        {desktopScreen && isAuthenticated && (
          <button
            className={`${styles.link} ${styles.favourite_iconActive}`}
            onClick={favouriteModalHandler}
          >
            <span>{favoriteYachtCount > 0 && favoriteYachtCount}</span>
          </button>
        )}
      </>
      {children}
    </div>
  );
};

export default FavoriteYachtsButton;
