/**
 * @file auth-hook.js
 *
 * Hook for accessing context from the {@link AuthContext}.
 */

import { useContext } from 'react';

import { AuthContext } from '@/providers';

export const useAuth = () => {
  const { updateAuthState, clearAuthState, authState } = useContext(AuthContext);
  return {
    updateAuthState: payload => updateAuthState(payload),
    clearAuthState: () => clearAuthState(),
    authState: authState,
  };
};
