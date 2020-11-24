import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ErrorBoundary, Loader } from "@/components";
import { AuthContext, AuthProvider } from "@/store";
import { Cookie } from "@/utils";
import "@/scss/index.scss";

const isAuthenticated = JSON.parse(Cookie.get("isAuthenticated") || null) ?? false;

const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const Login = React.lazy(() => import("@/pages/login"));

const PrivateGuard = ({ component: Component, ...rest }) => {
  const { state } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => (state.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

const PublicGuard = ({ component: Component, ...rest }) => {
  const { state } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => (state.isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />)}
    />
  );
};

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <AuthProvider isAuthenticated={isAuthenticated}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PrivateGuard exact path="/dashboard" component={Dashboard} />
            <PublicGuard exact path="/login" component={Login} />
            <Route component={() => <Redirect to="/dashboard" />} />
          </Switch>
        </Suspense>
      </AuthProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
