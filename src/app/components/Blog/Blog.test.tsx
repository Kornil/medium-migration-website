import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Blog from "app/components/Blog/Blog";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Blog />, div);
  unmountComponentAtNode(div);
});
