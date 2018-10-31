import { shallow } from "enzyme";
import fetchMock from "fetch-mock";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";

import { ErrorPage, NotFound } from "app/components";

import { StoryPageMatcher } from "./";
import Story from "./Story";

const fakeStory = {
  link: "https://google.com/hello",
  publishedAt: 1529091302770,
  title: "hello"
};

fetchMock.get(
  `/medium-api?url=https://google.com/hello`,
  JSON.stringify({ payload: [{ hello: `world!` }] })
);

describe("<StoryPageMatcher />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <MemoryRouter>
        <StoryPageMatcher
          StoriesContext={{ stories: [fakeStory] }}
          match={{ params: { id: "hello" }, isExact: true, path: "", url: "" }}
        />
      </MemoryRouter>,
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

  it("renders story if valid :id on /blog/:id", async () => {
    const wrapper = shallow(
      <StoryPageMatcher
        StoriesContext={{ stories: [fakeStory] }}
        match={{ params: { id: "hello" }, isExact: true, path: "", url: "" }}
      />
    );
    const instance = wrapper.instance() as StoryPageMatcher;

    await instance.fetchStory();

    expect(wrapper.find(Story)).toHaveLength(1);
  });

  it("renders error if url is invalid on /blog/:id", async () => {
    const wrapper = shallow(
      <StoryPageMatcher
        StoriesContext={{ stories: [{ ...fakeStory, link: "hello" }] }}
        match={{ params: { id: "hello" }, isExact: true, path: "", url: "" }}
      />
    );

    const instance = wrapper.instance() as StoryPageMatcher;

    await instance.fetchStory();

    expect(wrapper.find(ErrorPage)).toHaveLength(1);
  });

  it("call fetchStory when context is updated", async () => {
    const wrapper = shallow(
      <StoryPageMatcher
        StoriesContext={{ stories: [] }}
        match={{ params: { id: "hello" }, isExact: true, path: "", url: "" }}
      />
    );
    const instance = wrapper.instance() as StoryPageMatcher;
    const spy = spyOn(instance, "fetchStory");

    wrapper.setProps({
      StoriesContext: { stories: [fakeStory] }
    });

    expect(spy).toHaveBeenCalled();
  });
});
