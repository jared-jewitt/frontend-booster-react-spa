import React from "react";
import { shallow } from "enzyme";

import { AuthProvider } from "@/store";
import { LoginPage } from "@/pages";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
