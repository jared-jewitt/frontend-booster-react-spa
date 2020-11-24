import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/components";
import { AuthProvider, AuthConsumer } from "@/store";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { Cookie } from "@/utils";
import "@/scss/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <AuthProvider isAuthenticated={JSON.parse(Cookie.get("isAuthenticated") || null) ?? false}>
        <AuthConsumer>{({ state }) => (state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />)}</AuthConsumer>
      </AuthProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
