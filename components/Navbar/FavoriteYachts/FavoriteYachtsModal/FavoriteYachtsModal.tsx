import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Vessel } from '@/interfaces/vessel.interface';
import FYCard from '@/components/FYCard/FYCard';
import styles from '@/components/FYCard/fycard.module.scss';
import Close from '@/public/icons/close.svg';

import Loader from '@/components/Loader/Loader';
import { useModals } from '@/context/ModalsContext';
import { useFavourite } from '@/context/FavouriteYachtsContext';

const FavoriteYachtsModal = () => {
  const { isFavouriteModalOpen, favouriteModalHandler } = useModals();
  const { favouriteList, isLoadingFavourite } = useFavourite();

  return (
    isFavouriteModalOpen && (
      <div className={styles.favoriteModal}>
        {isLoadingFavourite && (
          <Loader
            biggest
            absoluteCenter
          />
        )}

        <>
          <div className={styles.favoriteModal__top}>
            <p className={styles.favoriteModal__top_title}>Your list</p>
            <Image
              src={Close}
              className={styles.close}
              alt="Close"
              onClick={favouriteModalHandler}
            />
          </div>
          {!isLoadingFavourite && favouriteList && (
            <ul className={styles.favoriteModal__yachts}>
              {favouriteList.slice(0, 5).map((yacht: Vessel | null) => {
                return (
                  <li
                    key={yacht?.yacht_id}
                    className={classNames(
                      `${styles.favoriteModal__yachts_yacht}`
                    )}
                  >
                    {yacht && (
                      <FYCard
                        yacht={yacht}
                        inCatalog={true}
                        inFavourite
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {!isLoadingFavourite && favouriteList?.length === 0 && (
            <p className={styles.noYachts}>There are no favorite yachts.</p>
          )}

          <div className={styles.favoriteModal__bottom}>
            <Link href={'/'}>Show more on User page</Link>
          </div>
        </>
      </div>
    )
  );
};

export default FavoriteYachtsModal;
