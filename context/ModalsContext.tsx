'use client';

import React, { useState, useContext } from 'react';

type ModalsContextType = {
  isAccountModalOpen: boolean;
  isAccountModalLoginOpen: boolean;
  accountModalHandler: () => void;
  accountModalLoginHandler: () => void;
  toggleBetweenModals: () => void;
};

const ModalsContext = React.createContext<ModalsContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const ModalsProvider: React.FC<Props> = ({ children }) => {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isAccountModalLoginOpen, setIsAccountModalLoginOpen] = useState(false);

  const accountModalHandler = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
  };

  const accountModalLoginHandler = () => {
    setIsAccountModalLoginOpen(!isAccountModalLoginOpen);
  };

  const toggleBetweenModals = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
    setIsAccountModalLoginOpen(!isAccountModalLoginOpen);
  };

  return (
    <ModalsContext.Provider
      value={{
        isAccountModalOpen,
        isAccountModalLoginOpen,
        accountModalHandler,
        accountModalLoginHandler,
        toggleBetweenModals,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = (): ModalsContextType => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalsContextProvider');
  }
  return context;
};
