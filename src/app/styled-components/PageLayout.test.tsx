import { shallow } from "enzyme";
import React from "react";

import PageLayout from "./PageLayout";

test("it works", () => {
  const wrapper = shallow(<PageLayout />);
  expect(wrapper).toMatchSnapshot();
});
