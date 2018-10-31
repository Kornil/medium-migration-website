import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Story from "./Story";

const story = {
  value: {
    title: "hello"
  }
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Story story={story} />, div);
  unmountComponentAtNode(div);
});
