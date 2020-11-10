import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderResult } from "@testing-library/react";

import { AuthProvider } from "@/store";

const AllTheProviders = ({ children }: { children: React.ReactElement }): JSX.Element => {
  return (
    <AuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </AuthProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };
