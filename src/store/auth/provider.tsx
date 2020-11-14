import React from "react";

import Context from "./context";

export interface IProps {
  children: React.ReactNode;
}

export interface IState {
  isAuthenticated: boolean;
  user: Record<string, any>;
}

export default ({ children }: IProps): React.ReactElement => {
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

  return (
    <Context.Provider
      value={{
        updateAuthState,
        clearAuthState,
        state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
