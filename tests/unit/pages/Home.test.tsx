import React from "react";

import { render } from "../../utils";

import { HomePage } from "@/pages";

describe("HomePage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<HomePage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
