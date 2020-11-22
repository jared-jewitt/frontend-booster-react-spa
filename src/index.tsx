import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/components";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { AuthProvider, AuthConsumer } from "@/store";
import "@/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <AuthProvider>
        <AuthConsumer>{({ state }) => (state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />)}</AuthConsumer>
      </AuthProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
