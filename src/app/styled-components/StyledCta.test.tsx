import { shallow } from "enzyme";
import React from "react";

import StyledCta from "./StyledCta";

test("it works", () => {
  for (const key in StyledCta) {
    const Component = StyledCta[key];
    const wrapper = shallow(<Component />);
    expect(wrapper).toMatchSnapshot();
  }
});
