import React from "react";

import { render } from "../../utils";

import { LoginPage } from "@/pages";

describe("LoginPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<LoginPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
