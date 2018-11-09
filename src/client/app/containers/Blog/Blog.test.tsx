import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";

import { Blog } from "./";

const fakeStory = {
  link: "https://google.com",
  publishedAt: 1529091302770,
  title: "hello"
};

describe("<Blog />", () => {
  it("it renders correctly", () => {
    const div = document.createElement("div");
    render(
      <MemoryRouter>
        <Blog StoriesContext={{ stories: [fakeStory] }} />
      </MemoryRouter>,
      div
    );
    unmountComponentAtNode(div);
  });
});
