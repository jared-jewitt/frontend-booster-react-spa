import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Loader } from "@/components";

const HomePage = React.lazy(() => import("@/pages/home"));
const NotFoundPage = React.lazy(() => import("@/pages/not-found"));

export default (): React.ReactElement => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};
