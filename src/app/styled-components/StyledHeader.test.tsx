import { shallow } from "enzyme";
import React from "react";

import StyledHeader from "app/styled-components/StyledHeader";

test("it works", () => {
  const wrapper = shallow(<StyledHeader />);
  expect(wrapper).toMatchSnapshot();
});
