/**
 * @file auth-provider.js
 *
 * Provider for managing the authentication state of the user.
 */

import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import { AUTH_STATE } from '@/constants';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const baseState = {
    isAuthenticated: false,
    user: {
      name: 'Foo',
    },
  };
  const dehydratedState = localStorage.getItem(AUTH_STATE) || null;
  const initialState = dehydratedState ? JSON.parse(dehydratedState) : baseState;

  const [authState, setAuthState] = useState(initialState);

  const updateAuthState = (payload) => {
    const data = { ...payload, isAuthenticated: true };
    localStorage.setItem(AUTH_STATE, JSON.stringify(data));
    setAuthState(data);
  };

  const clearAuthState = () => {
    localStorage.removeItem(AUTH_STATE);
    setAuthState(baseState);
  };

  const contextValue = {
    updateAuthState,
    clearAuthState,
    authState,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
