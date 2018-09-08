import { shallow } from "enzyme";
import React from "react";

import StyledHeader from "./StyledHeader";

test("it works", () => {
  const wrapper = shallow(<StyledHeader />);
  expect(wrapper).toMatchSnapshot();
});
