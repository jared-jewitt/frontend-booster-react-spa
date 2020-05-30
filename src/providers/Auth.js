/**
 * @file Auth.js
 *
 * Provider for managing the authentication state of the user.
 */

import React, { useState, createContext } from 'react';

const getLocalStorage = (key) => localStorage.getItem(key);
const setLocalStorage = (key, data) => localStorage.setItem(key, data);
const removeLocalStorage = (key) => localStorage.removeItem(key);

const initialState = {
  isAuthenticated: false,
  user: { name: 'Foo' },
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const dehydratedState = getLocalStorage('auth') || null;
  const [state, setState] = useState(dehydratedState ? JSON.parse(dehydratedState) : initialState);

  const updateAuthState = (payload) => {
    const data = { ...payload, isAuthenticated: true };
    setLocalStorage('auth', JSON.stringify(data));
    setState(data);
  };

  const clearAuthState = () => {
    removeLocalStorage('auth');
    setState(initialState);
  };

  const contextValue = {
    updateAuthState,
    clearAuthState,
    state,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
