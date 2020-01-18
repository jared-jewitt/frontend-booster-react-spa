/**
 * @file routes.js
 *
 * Manages browser router navigation within the application.
 */

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { Routes } from '@/constants';

const LoginPage = React.lazy(() => import('@/pages/login-page'));
const HomePage = React.lazy(() => import('@/pages/home-page'));
const AboutUsPage = React.lazy(() => import('@/pages/about-us-page'));
const NotFoundPage = React.lazy(() => import('@/pages/not-found-page'));

/**
 * Route helper which renders the given component or redirects based on the authentication state.
 * Specialized to handle private routes.
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
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
const PublicRoute = ({ component: Component, ...rest }) => {
  const { authState } = useAuth();
  return (
    <Route {...rest} render={(props) => (
      authState.isAuthenticated
        ? <Redirect to={Routes.HOME} />
        : <Component {...props} />
    )} />
  );
};

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <PublicRoute exact path={Routes.LOGIN} component={LoginPage} />
      <PrivateRoute exact path={Routes.HOME} component={HomePage} />
      <PrivateRoute exact path={Routes.ABOUT_US} component={AboutUsPage} />
      <Route path={Routes.WILDCARD} component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
