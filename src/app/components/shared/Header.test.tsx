import { shallow } from "enzyme";
import React from "react";

import Header from "./Header";

test("it renders correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
