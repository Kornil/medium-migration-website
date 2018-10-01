import { shallow } from "enzyme";
import fetchMock from "fetch-mock";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Blog from "app/components/Blog/Blog";

const initialData = {
  errorMessage: "",
  status: null,
  stories: []
};

const successData = {
  errorMessage: "",
  status: "success",
  stories: { hello: "world!" }
};

const errorData = {
  errorMessage: "there was an error",
  status: "error",
  stories: []
};

fetchMock.get(`*`, JSON.stringify({ hello: `world!` }));

describe("<Blog />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Blog />, div);
    unmountComponentAtNode(div);
  });

  it("mount with default state", () => {
    const wrapper = shallow(<Blog />);

    expect(wrapper.state()).toEqual(initialData);
  });

  it("fetches stories", async () => {
    const wrapper = shallow(<Blog />);
    const instance = wrapper.instance() as Blog;

    await instance.fetchMediumStories();

    expect(wrapper.state()).toEqual(successData);
  });

  it("fails to fetch stories", async () => {
    const wrapper = shallow(<Blog />);
    const instance = wrapper.instance() as Blog;

    try {
      await instance.fetchMediumStories();
    } catch (e) {
      expect(wrapper.state()).toEqual(errorData);
    }
  });
});
