'use client';

import React, { useState, useContext, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
import { TokenInterface } from '@/interfaces/token.interface';

export interface favoriteYachts {
  userId: number;
  favouriteYachtIds: number[] | null;
  count: number | null;
}

type AuthContextType = {
  isAuthenticated: boolean;
  userInfoToken: TokenInterface | null;
  varificationCode: string;
  userLogin: (token: string) => void;
  userLogout: () => void;
  setCode: (code: string) => void;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [varificationCode, setVarificationCode] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const LOCAL_STORAGE_TOKEN_KEY = 'authToken';
  const [userInfoToken, setUserInfoToken] = useState<TokenInterface | null>(
    null
  );
  const token =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
      : null;

  const tokenDecode = useCallback(() => {
    const now = Math.floor(new Date().getTime() / 1000);

    if (token) {
      const decodedToken = jwtDecode(token);
      setIsAuthenticated(true);

      if (decodedToken.exp !== undefined) {
        setUserInfoToken(decodedToken);

        if (now > decodedToken.exp) {
          userLogout();
        }
      }
    }
  }, [token]);

  useEffect(() => {
    tokenDecode();
  }, [tokenDecode]);

  const userLogin = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    tokenDecode();
  };

  const userLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  const setCode = (code: string) => {
    setVarificationCode(code);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userLogin,
        userLogout,
        userInfoToken,
        varificationCode,
        setCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }
  return context;
};
