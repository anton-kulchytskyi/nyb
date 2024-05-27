'use client';

import React, { useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import { TokenInterface } from '@/interfaces/token.interface';

type AuthContextType = {
  isAuthenticated: boolean;
  userInfoToken: TokenInterface | null;
  userLogin: (token: string) => void;
  userLogout: () => void;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfoToken, setUserInfoToken] = useState<TokenInterface | null>(
    null
  );

  useEffect(() => {
    const getToken = localStorage.getItem('authToken');
    const now = Math.floor(new Date().getTime() / 1000);
    if (getToken) {
      setIsAuthenticated(true);
      const decodedToken = jwtDecode(getToken);

      if (decodedToken.exp !== undefined) {
        setUserInfoToken(decodedToken);

        if (now > decodedToken.exp) {
          userLogout();
        }
      }
    }
  }, [userInfoToken?.exp]);

  const userLogin = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    setUserInfoToken(tokenDecode());
  };

  const userLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  const tokenDecode = () => {
    const getToken = localStorage.getItem('authToken');

    if (getToken) {
      const decodedToken = jwtDecode(getToken);

      if (decodedToken.exp !== undefined) {
        return decodedToken;
      }
    }

    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userLogin,
        userLogout,
        userInfoToken,
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
