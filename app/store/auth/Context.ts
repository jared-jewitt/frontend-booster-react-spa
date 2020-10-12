import React from "react";

import { IState } from "./Provider";

export interface IContext {
  updateAuthState: (payload: Pick<IState, "user">) => void;
  clearAuthState: () => void;
  state: IState;
}

export default React.createContext<IContext>({
  updateAuthState: null,
  clearAuthState: null,
  state: {
    isAuthenticated: false,
    user: {},
  },
});
