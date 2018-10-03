import { shallow } from "enzyme";
import React from "react";

import Footer from "./Footer";

test("it renders correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
