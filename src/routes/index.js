/**
 * @file index.js
 *
 * Manages browser router navigation within the application.
 */

import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Routes } from '@/constants';
import { useAuth } from '@/hooks';

const Login = lazy(() => import('@/pages/Login'));
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));

/**
 * Route helper specialized to handle private routes.
 */
const PrivateGuard = ({ component: Component, ...rest }) => {
  const { state } = useAuth();
  return (
    <Route {...rest} render={(props) => (
      state.isAuthenticated
        ? <Component {...props} />
        : <Redirect to={Routes.LOGIN} />
    )} />
  );
};

/**
 * Route helper specialized to handle public routes.
 */
const PublicGuard = ({ component: Component, ...rest }) => {
  const { state } = useAuth();
  return (
    <Route {...rest} render={(props) => (
      state.isAuthenticated
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
