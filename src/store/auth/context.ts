import React from "react";
import { IState } from "./provider";

export interface IContext {
  login: () => void;
  logout: () => void;
  state: IState;
}

export default React.createContext<IContext>({
  login: () => null,
  logout: () => null,
  state: null,
});
