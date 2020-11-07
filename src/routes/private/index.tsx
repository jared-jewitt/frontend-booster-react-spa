import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Loader } from "@/components";

const HomePage = React.lazy<React.FC>((): Promise<typeof import("@/pages/home")> => import("@/pages/home"));
const NotFoundPage = React.lazy<React.FC>(
  (): Promise<typeof import("@/pages/not-found")> => import("@/pages/not-found")
);

export default (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};
