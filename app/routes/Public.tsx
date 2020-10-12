import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const LoginPage = React.lazy<React.FC>((): Promise<typeof import("@/pages/Login")> => import("@/pages/Login"));
const NotFoundPage = React.lazy<React.FC>((): Promise<typeof import("@/pages/NotFound")> => import("@/pages/NotFound"));

export default (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};
