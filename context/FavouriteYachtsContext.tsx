'use client';

import React, { useState, useContext, useEffect } from 'react';
import {
  deleteFavouriteYachts,
  getFavouriteYachts,
} from '@/utils/api/usersAuth';
import { Vessel } from '@/interfaces/vessel.interface';
import { getVesselById } from '@/utils/api/getAllVessels';
import { useAuth } from './AuthContext';

export interface FavouriteYachts {
  userId: number;
  favouriteYachtIds: number[];
  count: number;
}

type FavouriteContenxtType = {
  favouriteYachtsList: Vessel[];
  tempYacht: number;
  isRemoving: boolean;
  isLoadingFavourite: boolean;
  favouritesCount: number;
  isFavouriteModalOpen: boolean;
  deleteNewFavorite: (id: number) => void;
  favouriteModalHandler: () => void;
};

const FavouriteContext = React.createContext<FavouriteContenxtType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const FavouriteYachtsProvider: React.FC<Props> = ({ children }) => {
  const [favouriteData, setFavouriteData] = useState<FavouriteYachts | null>(
    null
  );
  const [tempYacht, setTempYacht] = useState<number>(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const [favouriteYachtsList, setFavouriteYachtsList] = useState<Vessel[]>([]);
  const [isLoadingFavourite, setIsLoadingFavourite] = useState(false);
  const [favouritesCount, setFavouritesCount] = useState(0);
  const [isFavouriteModalOpen, setIsFavouriteModalOpen] = useState(false);

  const favouriteModalHandler = () => {
    setIsFavouriteModalOpen(!isFavouriteModalOpen);
  };

  const LOCAL_STORAGE_TOKEN_KEY = 'authToken';
  const { userInfoToken, isAuthenticated } = useAuth();

  const token =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
      : null;

  useEffect(() => {
    if (userInfoToken?.sub && isAuthenticated) {
      setIsLoadingFavourite(true);
      getFavouriteYachts(userInfoToken?.sub, token)
        .then((response) => {
          const yachtsData = response as FavouriteYachts | null;

          if (yachtsData) {
            setFavouriteData(yachtsData);
            setFavouritesCount(yachtsData?.count);
          }
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => {
          setIsLoadingFavourite(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const favoriteYachtIds = favouriteData?.favouriteYachtIds ?? [];

  useEffect(() => {
    if (favoriteYachtIds.length > 0) {
      setIsLoadingFavourite(true);
      Promise.all(
        favoriteYachtIds.map((id) =>
          getVesselById(`/${id}`)
            .then((responseYachts) => {
              setFavouriteYachtsList((prev) => [...prev, responseYachts]);
              setIsLoadingFavourite(false);
            })
            .catch((error) => {
              alert(error);
            })
            .finally(() => {
              setIsLoadingFavourite(false);
            })
        )
      );
    }
  }, [favoriteYachtIds]);

  const deleteNewFavorite = (id: number) => {
    if (userInfoToken?.sub && id && token) {
      setIsRemoving(true);
      setTempYacht(id);
      deleteFavouriteYachts(userInfoToken?.sub, id, token)
        .then(() => {})
        .then((error) => {
          alert(error);
        })
        .finally(() => {
          const newFavoritesYachts = favouriteYachtsList.filter(
            (yacht: Vessel) => yacht.yacht_id !== id
          );
          if (newFavoritesYachts) {
            setFavouriteYachtsList(newFavoritesYachts);
            setFavouritesCount(newFavoritesYachts.length);
          }

          setIsRemoving(false);
          setTempYacht(0);
        });
    }
  };

  return (
    <FavouriteContext.Provider
      value={{
        favouriteYachtsList,
        tempYacht,
        isRemoving,
        isLoadingFavourite,
        favouritesCount,
        isFavouriteModalOpen,
        deleteNewFavorite,
        favouriteModalHandler,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = (): FavouriteContenxtType => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error('useFavourite must be used within a AuthContextProvider');
  }
  return context;
};
