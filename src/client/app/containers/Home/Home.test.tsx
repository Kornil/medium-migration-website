import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Home from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Home />, div);
  unmountComponentAtNode(div);
});
