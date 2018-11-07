import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Story from "./Story";
import storyTest from "./test-story.json";

describe("<Story />", () => {
  beforeEach(() => {
    // @ts-ignore
    window.getSelection = () => {
      return {
        removeAllRanges: () => null
      };
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Story story={storyTest} cached={false} />, div);
    unmountComponentAtNode(div);
  });
});
