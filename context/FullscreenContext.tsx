'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  // useEffect,
} from 'react';
// import FullScreen from 'react-fullscreen-crossbrowser';

type FullscreenContextType = {
  isFullscreenEnabled: boolean;
  setIsFullscreenEnabled: (isFullscreenEnabled: boolean) => void;
};

const FullscreenContext = createContext<FullscreenContextType | undefined>(
  undefined
);

type FullscreenProviderProps = {
  children: ReactNode;
};

export const FullscreenProvider: React.FC<FullscreenProviderProps> = ({
  children,
}) => {
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(false);
  // const fullscreenHandle = () => {
  //   setIsFullscreenEnabled(!isFullscreenEnabled);
  // }
  return (
    <FullscreenContext.Provider
      value={{
        isFullscreenEnabled,
        setIsFullscreenEnabled,
      }}
    >
      {children}
    </FullscreenContext.Provider>
  );
};

export const useFullscreen = (): FullscreenContextType => {
  const context = useContext(FullscreenContext);
  if (!context) {
    throw new Error('useFullscreen must be used within a FullscreenProvider');
  }
  return context;
};
