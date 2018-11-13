import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const successData = {
  stories: [{ hello: "world!" }]
};

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    unmountComponentAtNode(div);
  });

  it("renders from localhost data", () => {
    localStorage.setItem("medium_data", JSON.stringify(successData.stories));

    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    unmountComponentAtNode(div);
  });
});
