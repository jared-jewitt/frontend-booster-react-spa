import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/components";
import { AuthProvider, AuthConsumer } from "@/store";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { cookie } from "@/utils";
import "@/scss/global.scss";

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <AuthProvider isAuthenticated={JSON.parse(cookie.get("isAuthenticated") || null) ?? false}>
        <AuthConsumer>{({ state }) => (state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />)}</AuthConsumer>
      </AuthProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
