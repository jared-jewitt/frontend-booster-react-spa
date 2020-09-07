import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route as GenericRoute } from "react-router-dom";

import "@/styles/index.scss";

import { AuthProvider } from "@/providers";
import { PrivateGuard, PublicGuard } from "@/components";
import { Route } from "@/ts/enums";

const Login = lazy<React.FC>((): Promise<typeof import("@/pages/Login")> => import("@/pages/Login"));
const Home = lazy<React.FC>((): Promise<typeof import("@/pages/Home")> => import("@/pages/Home"));
const NotFound = lazy<React.FC>((): Promise<typeof import("@/pages/NotFound")> => import("@/pages/NotFound"));

const App: React.FC = (): JSX.Element => (
  <AuthProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicGuard exact path={Route.Login} component={Login} />
          <PrivateGuard exact path={Route.Home} component={Home} />
          <GenericRoute path={Route.Wildcard} component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </AuthProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
