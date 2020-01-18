/**
 * @file routes.js
 *
 * Manages browser router navigation within the application.
 */

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Routes } from '@/constants';

const HomePage = React.lazy(() => import('@/pages/home-page'));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path={Routes.HOME} component={HomePage} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
