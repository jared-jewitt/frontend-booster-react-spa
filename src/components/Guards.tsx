import React, { LazyExoticComponent } from "react";
import { Redirect, Route as GenericRoute, RouteComponentProps } from "react-router-dom";

import { useAuth } from "@/hooks";
import { Route } from "@/ts/enums";

interface IGuardProps {
  component: LazyExoticComponent<React.FC<RouteComponentProps>>;
  path: string;
  exact?: boolean;
}

export const PrivateGuard: React.FC<IGuardProps> = ({ component: Component, path, exact }): JSX.Element => {
  const { state } = useAuth();
  return (
    <GenericRoute
      exact={exact}
      path={path}
      render={(props) => (state.isAuthenticated ? <Component {...props} /> : <Redirect to={Route.Login} />)}
    />
  );
};

export const PublicGuard: React.FC<IGuardProps> = ({ component: Component, path, exact }): JSX.Element => {
  const { state } = useAuth();
  return (
    <GenericRoute
      path={path}
      exact={exact}
      render={(props) => (state.isAuthenticated ? <Redirect to={Route.Home} /> : <Component {...props} />)}
    />
  );
};
