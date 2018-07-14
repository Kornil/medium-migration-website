import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { About } from "./About";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<About />, div);
  unmountComponentAtNode(div);
});
