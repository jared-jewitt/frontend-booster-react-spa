import React from "react";

import { render } from "../../utils";

import { NotFoundPage } from "@/pages";

describe("NotFoundPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<NotFoundPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
