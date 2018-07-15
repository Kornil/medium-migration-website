import { mount } from "enzyme";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Home from "./Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Home />, div);
  unmountComponentAtNode(div);
});

it("renders correct user prop when supplied", () => {
  const wrapper = mount(<Home user="Francesco" />);
  expect(wrapper.prop("user")).toEqual("Francesco");
});

it("renders correct default prop when not supplied", () => {
  const wrapper = mount(<Home />);
  expect(wrapper.prop("user")).toEqual("Default User");
});
