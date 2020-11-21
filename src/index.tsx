import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { AuthProvider, AuthConsumer } from "@/store";
import "@/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AuthConsumer>{({ state }) => (state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />)}</AuthConsumer>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
