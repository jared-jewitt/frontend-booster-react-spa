import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Loader } from "@/components";

const Login = React.lazy(() => import("@/pages/login"));

export default function PublicRoutes(): React.ReactElement {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route component={() => <Redirect to="/login" />} />
      </Switch>
    </Suspense>
  );
}
