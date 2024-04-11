'use client';
import fscreen from 'fscreen';

import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  ReactNode,
} from 'react';

type FullscreenContextType = {
  fullscreenRef: React.MutableRefObject<HTMLDivElement | null>;
  fullscreenEnabled: boolean;
  fullscreenActive: boolean;
  enterFullscreen: () => void;
  exitFullscreen: () => void;
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
  const fullscreenRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleChange = () => {
      setActive(fscreen.fullscreenElement === fullscreenRef.current);
    };
    fscreen.addEventListener('fullscreenchange', handleChange);
    return () => fscreen.removeEventListener('fullscreenchange', handleChange);
  }, []);

  const enterFullscreen = useCallback(async () => {
    if (fscreen.fullscreenElement) {
      await fscreen.exitFullscreen();
    }
    return fscreen.requestFullscreen(fullscreenRef.current as HTMLElement);
  }, []);

  const exitFullscreen = useCallback(async () => {
    if (fscreen.fullscreenElement === fullscreenRef.current) {
      return fscreen.exitFullscreen();
    }
  }, []);

  const context = useMemo(() => {
    return {
      fullscreenRef,
      fullscreenEnabled: fscreen.fullscreenEnabled,
      fullscreenActive: active,
      enterFullscreen,
      exitFullscreen,
    };
  }, [active, enterFullscreen, exitFullscreen]);
  return (
    <FullscreenContext.Provider value={context}>
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
