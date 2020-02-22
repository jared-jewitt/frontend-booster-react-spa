/**
 * @file routes.js
 *
 * Manages browser router navigation within the application.
 */

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Routes } from '@/constants';
import { useAuth } from '@/hooks';

const LoginPage = React.lazy(() => import('@/pages/login-page'));
const HomePage = React.lazy(() => import('@/pages/home-page'));
const NotFoundPage = React.lazy(() => import('@/pages/not-found-page'));

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
      <PublicGuard exact path={Routes.LOGIN} component={LoginPage} />
      <PrivateGuard exact path={Routes.HOME} component={HomePage} />
      <Route path={Routes.WILDCARD} component={NotFoundPage} />
    </Switch>
  </Suspense>
);
