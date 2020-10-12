import React from "react";

import Context, { IContext } from "./context";

export interface IProps {
  children: (value: IContext) => React.ReactNode;
}

export default ({ children }: IProps): JSX.Element => {
  return <Context.Consumer>{(value) => children(value)}</Context.Consumer>;
};
