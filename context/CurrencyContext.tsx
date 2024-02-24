'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type CurrencyContextType = {
  selectedCurrency: string;
  selectedCurrencySymbol: string;
  setCurrency: (currency: string) => void;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

type CurrencyProviderProps = {
  children: ReactNode;
};

const currencySymbols: { [key: string]: string } = {
  EUR: '€',
  GBP: '£',
  USD: '$',
  NOK: 'kr',
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
  const [selectedCurrencySymbol, setSelectedCurrencySymbol] =
    useState<string>('€');

  const setCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setSelectedCurrencySymbol(currencySymbols[currency]);
  };

  useEffect(() => {
    const storedCurrency = localStorage.getItem(LOCAL_STORAGE_CURRENCY_KEY);
    if (storedCurrency) {
      setSelectedCurrency(storedCurrency);
      setSelectedCurrencySymbol(currencySymbols[storedCurrency]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CURRENCY_KEY, selectedCurrency);
  }, [selectedCurrency]);

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, selectedCurrencySymbol, setCurrency }}
    >
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
