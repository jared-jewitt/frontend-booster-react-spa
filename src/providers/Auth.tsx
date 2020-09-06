import React, { useState, createContext } from "react";

import { IAuthPayload, IAuthContext } from "@/ts/interfaces";

const getLocalStorage = (key: string): string => localStorage.getItem(key);
const setLocalStorage = (key: string, data: string): void => localStorage.setItem(key, data);
const removeLocalStorage = (key: string): void => localStorage.removeItem(key);

const initialState = {
  isAuthenticated: false,
  user: {
    name: "Foo",
  },
};

export const AuthContext = createContext<IAuthContext>({
  updateAuthState: null,
  clearAuthState: null,
  state: initialState,
});

export interface IState {
  isAuthenticated: boolean;
  user: {
    name: string;
  };
}

export interface IProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IProps> = ({ children }): JSX.Element => {
  const dehydratedState = getLocalStorage("auth") || null;
  const [state, setState] = useState<IState>(dehydratedState ? JSON.parse(dehydratedState) : initialState);

  const updateAuthState = (payload: IAuthPayload): void => {
    const data = { user: { ...payload }, isAuthenticated: true };
    setLocalStorage("auth", JSON.stringify(data));
    setState(data);
  };

  const clearAuthState = (): void => {
    removeLocalStorage("auth");
    setState(initialState);
  };

  const contextValue = {
    updateAuthState,
    clearAuthState,
    state,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
