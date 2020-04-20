/**
 * @file Auth.js
 *
 * Provider for managing the authentication state of the user.
 */

import React, { useState, createContext } from 'react';

import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils';

export const AuthContext = createContext();
export default ({ children }) => {
  const dehydratedState = getLocalStorage('auth') || null;
  const initialState = {
    isAuthenticated: false,
    user: { name: 'Foo' },
  };
  const [state, setState] = useState(dehydratedState ? JSON.parse(dehydratedState) : initialState);

  const updateAuthState = (payload) => {
    const data = { ...payload, isAuthenticated: true };
    setLocalStorage('auth', data);
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
