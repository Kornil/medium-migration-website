import * as React from "react";
import * as ReactDOM from "react-dom";
import Sum from "./Sum";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sum />, div);
});
