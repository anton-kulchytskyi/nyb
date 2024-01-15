'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
// import useLocalStorage from '@/hooks/useLocalStorage';

type CurrencyContextType = {
  selectedCurrency: string;
  setCurrency: (currency: string) => void;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

type CurrencyProviderProps = {
  children: ReactNode;
};

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({
  children,
}) => {
  const LOCAL_STORAGE_CURRENCY_KEY = 'selectedCurrency';
  const storedCurrency =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(LOCAL_STORAGE_CURRENCY_KEY)
      : null;

  const initialCurrency = storedCurrency ? storedCurrency : 'EUR';
  const [selectedCurrency, setSelectedCurrency] =
    useState<string>(initialCurrency);

  const setCurrency = (currency: string) => {
    setSelectedCurrency(currency);
  };

  useEffect(() => {
    const storedCurrency = localStorage.getItem(LOCAL_STORAGE_CURRENCY_KEY);
    if (storedCurrency) {
      setSelectedCurrency(storedCurrency);
    }
  }, []);

  useEffect(() => {
    // setStoredCurrency(selectedCurrency);
    localStorage.setItem(LOCAL_STORAGE_CURRENCY_KEY, selectedCurrency);
  }, [selectedCurrency]);

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
