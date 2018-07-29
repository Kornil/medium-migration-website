import { shallow } from "enzyme";
import React from "react";

import PageLayout from "./PageLayout";

import "jest-styled-components";

test("it works", () => {
  const button = shallow(<PageLayout />);
  expect(button).toMatchSnapshot();
});
