import React from "react";
import { Dashboard } from "@/pages";
import { render } from "../../utils";

describe("Dashboard page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Dashboard />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
