import { useEffect, useState } from 'react';
import styles from '@/components/Navbar/FavoriteYachts/FavoriteYachtsModal/favoriteYachtsModal.module.scss';
import { getVesselById } from '@/utils/api/getAllVessels';
import { Vessel } from '@/interfaces/vessel.interface';
import FYCard from '@/components/FYCard/FYCard';
import Loader from '@/components/Loader/Loader';

type Props = {
  idsFavoriteYachts: number[] | null;
};

const FavoriteYachtsModal = ({ idsFavoriteYachts }: Props) => {
  const [favoriteYachtsList, setFavoriteYachtsList] = useState<Vessel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (idsFavoriteYachts) {
      setIsLoading(true);
      Promise.all(
        idsFavoriteYachts.map((id) =>
          getVesselById(`/${id}`)
            .then((responseYachts) => {
              setFavoriteYachtsList((prev) => [...prev, responseYachts]);
            })
            .catch((error) => {
              alert(error);
            })
            .finally(() => {
              setIsLoading(false);
            })
        )
      );
    }
  }, [idsFavoriteYachts]);

  return (
    <div className={styles.favoriteModal}>
      <div className={styles.favoriteModal__top}></div>
      <div className={styles.favoriteModal__yachts}>
        {isLoading && <Loader />}
        {!isLoading &&
          favoriteYachtsList.map((yacht: Vessel) => (
            <FYCard
              key={yacht.yacht_id}
              yacht={yacht}
              inCatalog={true}
            />
          ))}
      </div>
      <div className={styles.favoriteModal__bottom}></div>
    </div>
  );
};

export default FavoriteYachtsModal;
