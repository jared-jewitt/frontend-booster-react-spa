/**
 * @file auth-provider.js
 *
 * Provider for managing the authentication state of the user.
 */

import React, { Fragment, useState, createContext } from 'react';
import PropTypes from 'prop-types';

import { AUTH_STATE } from '@/constants';

export const AuthProviderContext = createContext();

const AuthProvider = ({ children }) => {
  const baseState = {
    isAuthenticated: false,
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
    <AuthProviderContext.Provider value={contextValue}>
      <Fragment>
        {children}
      </Fragment>
    </AuthProviderContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider };
