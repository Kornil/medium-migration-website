import { shallow } from "enzyme";
import React from "react";

import NavLink from "./NavLink";

test("it works", () => {
  const wrapper = shallow(<NavLink to="/random" />);
  expect(wrapper).toMatchSnapshot();
});
