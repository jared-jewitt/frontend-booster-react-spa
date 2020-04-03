/**
 * @file index.js
 *
 * Manages browser router navigation within the application.
 */

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Routes } from '@/constants';
import { useAuth } from '@/hooks';

const Login = React.lazy(() => import('@/pages/Login'));
const Home = React.lazy(() => import('@/pages/Home'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

/**
 * Route helper which renders the given component or redirects based on the authentication state.
 * Specialized to handle private routes.
 */
const PrivateGuard = ({ component: Component, ...rest }) => {
  const { authState } = useAuth();
  return (
    <Route {...rest} render={(props) => (
      authState.isAuthenticated
        ? <Component {...props} />
        : <Redirect to={Routes.LOGIN} />
    )} />
  );
};

/**
 * Route helper which renders the given component or redirects based on the authentication state.
 * Specialized to handle public routes.
 */
const PublicGuard = ({ component: Component, ...rest }) => {
  const { authState } = useAuth();
  return (
    <Route {...rest} render={(props) => (
      authState.isAuthenticated
        ? <Redirect to={Routes.HOME} />
        : <Component {...props} />
    )} />
  );
};

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <PublicGuard exact path={Routes.LOGIN} component={Login} />
      <PrivateGuard exact path={Routes.HOME} component={Home} />
      <Route path={Routes.WILDCARD} component={NotFound} />
    </Switch>
  </Suspense>
);
