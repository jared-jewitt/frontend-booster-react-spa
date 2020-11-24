import React from "react";
import { Cookie } from "@/utils";
import Context from "./context";

export interface IProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export interface IState extends Pick<IProps, "isAuthenticated"> {
  isLoading: boolean;
}

export default function AuthProvider({ children, isAuthenticated }: IProps): React.ReactElement {
  const [state, setState] = React.useState<IState>({ isAuthenticated, isLoading: false });

  const login = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await new Promise((res) => setTimeout(res, 250));
      Cookie.set("isAuthenticated", true, { path: "/", days: 7 });
      setState({ isAuthenticated: true, isLoading: false });
    } catch (e) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await new Promise((res) => setTimeout(res, 250));
      Cookie.delete("isAuthenticated", { path: "/" });
      setState({ isAuthenticated: false, isLoading: false });
    } catch (e) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  return (
    <Context.Provider
      value={{
        login,
        logout,
        state,
      }}
    >
      {children}
    </Context.Provider>
  );
}
