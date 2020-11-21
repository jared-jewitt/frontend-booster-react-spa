import React from "react";
import { Cookie } from "@/utils";

export interface IState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface IContext {
  login: () => void;
  logout: () => void;
  state: IState;
}

export const AuthContext = React.createContext<IContext>({
  login: () => null,
  logout: () => null,
  state: null,
});

export const AuthConsumer = ({ children }: { children: (value: IContext) => React.ReactNode }): React.ReactElement => {
  return <AuthContext.Consumer>{(value) => children(value)}</AuthContext.Consumer>;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [state, setState] = React.useState<IState>({
    isAuthenticated: JSON.parse(Cookie.get("isAuthenticated") || null) ?? false,
    isLoading: false,
  });

  // TODO: Replace with your own login logic.
  const login = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await new Promise((res) => setTimeout(res, 1000));
      Cookie.set("isAuthenticated", true, { days: 7 });
      setState({ isAuthenticated: true, isLoading: false });
    } catch (e) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  // TODO: Replace with your own logout logic.
  const logout = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await new Promise((res) => setTimeout(res, 1000));
      Cookie.delete("isAuthenticated");
      setState({ isAuthenticated: false, isLoading: false });
    } catch (e) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
