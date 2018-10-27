import { shallow } from "enzyme";
import React from "react";

import Cta from "./Cta";

test("it renders correctly", () => {
  const wrapper = shallow(<Cta title="hello" body={<p>world</p>} />);
  expect(wrapper).toMatchSnapshot();
});
