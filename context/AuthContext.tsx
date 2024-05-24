'use client';

import React, { useState, useContext, useEffect } from 'react';

type AuthContextType = {
  token: string;
  isAuthenticated: boolean;
  userLogin: (token: string) => void;
  userLogout: () => void;
  getAuthToken: () => void;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const userLogin = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const userLogout = () => {
    localStorage.removeItem('authToken');
    setToken('');
    setIsAuthenticated(false);
  };

  const getAuthToken = async () => {
    try {
      const getToken = localStorage.getItem('authToken');

      if (getToken) {
        setToken(getToken);
      }
    } catch (error) {
      return;
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, userLogin, userLogout, getAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
