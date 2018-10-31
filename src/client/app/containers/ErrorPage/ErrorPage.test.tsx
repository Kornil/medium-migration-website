import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import ErrorPage from "./";

describe("<ErrorPage />", () => {
  it("renders without crashing with error prop", () => {
    const div = document.createElement("div");
    render(<ErrorPage error="error" />, div);
    unmountComponentAtNode(div);
  });

  it("renders without crashing with null error prop", () => {
    const div = document.createElement("div");
    render(<ErrorPage error={null} />, div);
    unmountComponentAtNode(div);
  });
});
