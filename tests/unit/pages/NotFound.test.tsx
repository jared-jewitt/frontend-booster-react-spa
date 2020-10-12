import React from "react";
import { shallow } from "enzyme";

import { NotFoundPage } from "@/pages";

describe("Unit - NotFoundPage", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
