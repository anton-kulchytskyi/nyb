import { useFavourite } from '@/context/FavouriteYachtsContext';
import FavoriteYachtsModal from './FavoriteYachtsModal/FavoriteYachtsModal';
import FavoriteYachtsButton from './FavoriteYachtsButton/FavoriteYachtsButton';

const FavoriteYachts = () => {
  const { favouritesCount } = useFavourite();

  return (
    <>
      <FavoriteYachtsButton countYachts={favouritesCount} />
      <FavoriteYachtsModal />
    </>
  );
};

export default FavoriteYachts;
