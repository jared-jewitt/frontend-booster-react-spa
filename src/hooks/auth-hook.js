/**
 * @file auth-hook.js
 *
 * Hook for accessing context from the {@link AuthProviderContext}.
 */

import { useContext } from 'react';

import { AuthProviderContext } from '@/providers';

export const useAuth = () => {
  const { updateAuthState, clearAuthState, authState } = useContext(AuthProviderContext);

  return {
    updateAuthState: payload => updateAuthState(payload),
    clearAuthState: () => clearAuthState(),
    authState: authState,
  };
};
