/**
 * @file auth.js
 *
 * Hook for accessing context from the {@link AuthContext}.
 */

import { useContext } from 'react';

import { AuthContext } from '@/providers';

export default () => {
  const { updateAuthState, clearAuthState, state } = useContext(AuthContext);
  return {
    updateAuthState: (payload) => updateAuthState(payload),
    clearAuthState: () => clearAuthState(),
    state,
  };
};
