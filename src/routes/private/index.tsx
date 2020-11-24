import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Loader } from "@/components";

const Dashboard = React.lazy(() => import("@/pages/dashboard"));

export default function PrivateRoutes(): React.ReactElement {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={() => <Redirect to="/dashboard" />} />
      </Switch>
    </Suspense>
  );
}
