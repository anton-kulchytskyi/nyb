'use client';

import React, { useState, useContext } from 'react';

type ModalsContextType = {
  isAccountModalOpen: boolean;
  isAccountModalLoginOpen: boolean;
  isVarificationModalOpen: boolean;
  accountModalHandler: () => void;
  accountModalLoginHandler: () => void;
  accountVarificationModalHandler: () => void;
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
  const [isVarificationModalOpen, setIsVarificationModalOpen] = useState(false);

  const accountModalHandler = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
  };

  const accountModalLoginHandler = () => {
    setIsAccountModalLoginOpen(!isAccountModalLoginOpen);
  };

  const accountVarificationModalHandler = () => {
    setIsVarificationModalOpen(!isVarificationModalOpen);
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
        isVarificationModalOpen,
        accountModalHandler,
        accountModalLoginHandler,
        toggleBetweenModals,
        accountVarificationModalHandler,
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
