import React from "react";
import { Cookie } from "@/utils";
import { Login } from "@/pages";
import { render } from "../../utils";

describe("Login page", () => {
  beforeAll(() => {
    Cookie.set("isAuthenticated", true, { days: 7, path: "/" });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Login />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
