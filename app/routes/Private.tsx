import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = React.lazy<React.FC>((): Promise<typeof import("@/pages/Home")> => import("@/pages/Home"));
const NotFoundPage = React.lazy<React.FC>((): Promise<typeof import("@/pages/NotFound")> => import("@/pages/NotFound"));

export default (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};
