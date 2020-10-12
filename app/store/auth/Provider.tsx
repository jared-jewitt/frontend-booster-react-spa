import React from "react";

import Context from "./Context";

export interface IProps {
  children: React.ReactNode;
}

export interface IState {
  isAuthenticated: boolean;
  user: Record<string, any>;
}

export default ({ children }: IProps): JSX.Element => {
  const initialState = { isAuthenticated: false, user: {} };
  const dehydratedState = localStorage.getItem("auth") || null;
  const [state, setState] = React.useState<IState>(dehydratedState ? JSON.parse(dehydratedState) : initialState);

  const updateAuthState = (payload: Pick<IState, "user">): void => {
    const data = { ...payload, isAuthenticated: true };
    localStorage.setItem("auth", JSON.stringify(data));
    setState(data);
  };

  const clearAuthState = (): void => {
    localStorage.removeItem("auth");
    setState(initialState);
  };

  const contextValue = {
    updateAuthState,
    clearAuthState,
    state,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
