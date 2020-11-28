import React from "react";
import { Dashboard } from "@/pages";
import { Cookie } from "@/utils";
import { render } from "../../utils";

describe("Dashboard page", () => {
  beforeAll(() => {
    Cookie.set("isAuthenticated", true, { path: "/", days: 7 });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Dashboard />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
