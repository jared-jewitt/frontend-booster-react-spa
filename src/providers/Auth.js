/**
 * @file Auth.js
 *
 * Provider for managing the authentication state of the user.
 */

import React, { useState, createContext } from 'react';

const getAuthState = () => localStorage.getItem('authState');
const setAuthState = (data) => localStorage.setItem('authState', JSON.stringify(data));
const removeAuthState = () => localStorage.removeItem('authState');

export const AuthContext = createContext();

export default ({ children }) => {
  const dehydratedState = getAuthState() || null;
  const initialState = {
    isAuthenticated: false,
    user: { name: 'Foo' },
  };
  const [state, setState] = useState(dehydratedState ? JSON.parse(dehydratedState) : initialState);

  const updateAuthState = (payload) => {
    const data = { ...payload, isAuthenticated: true };
    setAuthState(data);
    setState(data);
  };

  const clearAuthState = () => {
    removeAuthState();
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
