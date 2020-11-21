import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader } from "@/components";

const Home = React.lazy(() => import("@/pages/home"));
const NotFound = React.lazy(() => import("@/pages/not-found"));

export default function PrivateRoutes(): React.ReactElement {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
