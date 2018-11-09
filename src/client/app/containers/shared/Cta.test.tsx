import { shallow } from "enzyme";
import React from "react";

import Cta from "./Cta";

test("it renders correctly", () => {
  const wrapper = shallow(
    <Cta title="hello">
      <p>world</p>
    </Cta>
  );
  expect(wrapper).toMatchSnapshot();
});
