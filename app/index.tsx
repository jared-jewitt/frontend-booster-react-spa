import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider, AuthConsumer } from "@/store";
import { PrivateRoutes, PublicRoutes } from "@/routes";

import "@/styles/index.scss";

ReactDOM.render(
  <AuthProvider>
    <AuthConsumer>
      {({ state }) => <BrowserRouter>{state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>}
    </AuthConsumer>
  </AuthProvider>,
  document.getElementById("root")
);
