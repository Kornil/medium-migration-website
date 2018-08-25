import { shallow } from "enzyme";
import React from "react";

import Header from "./Header";

test("it works", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
