import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Loader } from "@/components";

const LoginPage = React.lazy(() => import("@/pages/login"));
const NotFoundPage = React.lazy(() => import("@/pages/not-found"));

export default (): React.ReactElement => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};
