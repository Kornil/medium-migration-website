import { shallow } from "enzyme";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { NotFound } from "app/components";

import { StoryPageMatcher } from "./";

const fakeStory = {
  link: "https://google.com",
  publishedAt: 1529091302770,
  title: "hello"
};

describe("<StoryPageMatcher />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <StoryPageMatcher
        StoriesContext={{ stories: [fakeStory] }}
        match={{ params: { id: "hello" }, isExact: true, path: "", url: "" }}
      />,
      div
    );
    unmountComponentAtNode(div);
  });

  it("renders 404 if invalid :id on /blog/:id", () => {
    const wrapper = shallow(
      <StoryPageMatcher
        StoriesContext={{ stories: [fakeStory] }}
        match={{ params: { id: "wrong" }, isExact: true, path: "", url: "" }}
      />
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
