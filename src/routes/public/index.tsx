import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader } from "@/components";

const Login = React.lazy(() => import("@/pages/login"));
const NotFound = React.lazy(() => import("@/pages/404"));

export default function PublicRoutes(): React.ReactElement {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
