import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Loader } from "@/components";

const LoginPage = React.lazy<React.FC>((): Promise<typeof import("@/pages/login")> => import("@/pages/login"));
const NotFoundPage = React.lazy<React.FC>(
  (): Promise<typeof import("@/pages/not-found")> => import("@/pages/not-found")
);

export default (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};
