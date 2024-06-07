import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getFavouriteYachts } from '@/utils/api/usersAuth';
import { favouriteYachts } from '@/interfaces/favouriteYachts.interface';
import FavoriteYachtsButton from './FavoriteYachtsButton/FavoriteYachtsButton';
import FavoriteYachtsModal from './FavoriteYachtsModal/FavoriteYachtsModal';

const FavoriteYachts = () => {
  const [favoriteYachts, setFavoriteYachts] = useState<favouriteYachts | null>(
    null
  );
  const { userInfoToken } = useAuth();

  const token = localStorage.getItem('authToken');

  const getUserFavouriteYachts = useCallback(() => {
    if (userInfoToken?.sub) {
      getFavouriteYachts(userInfoToken?.sub, token)
        .then((response) => {
          const yachtsData = response as favouriteYachts | null;

          setFavoriteYachts(yachtsData);
        })
        .catch((error) => {
          alert(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    getUserFavouriteYachts();
  }, [getUserFavouriteYachts]);

  if (!favoriteYachts) {
    return;
  }

  const { count, favouriteYachtIds } = favoriteYachts;

  return (
    <>
      <FavoriteYachtsButton countYachts={count} />
      <FavoriteYachtsModal idsFavoriteYachts={favouriteYachtIds} />
    </>
  );
};

export default FavoriteYachts;
