import { useContext } from "react";

import { AuthContext } from "@/providers";
import { IAuthPayload, IAuthContext } from "@/ts/interfaces";

export const useAuth = (): IAuthContext => {
  const { updateAuthState, clearAuthState, state } = useContext(AuthContext);

  return {
    updateAuthState: (payload: IAuthPayload) => updateAuthState(payload),
    clearAuthState: () => clearAuthState(),
    state,
  };
};
