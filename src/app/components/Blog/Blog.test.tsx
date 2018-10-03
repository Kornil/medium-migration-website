import { shallow } from "enzyme";
import fetchMock from "fetch-mock";
import React from "react";

import Blog from "./Blog";

const initialData = {
  errorMessage: "",
  status: null,
  stories: []
};

const successData = {
  errorMessage: "",
  status: "success",
  stories: [{ hello: "world!" }]
};

const errorData = {
  errorMessage: "there was an error",
  status: "error",
  stories: []
};

fetchMock.get(`*`, JSON.stringify({ payload: [{ hello: `world!` }] }));

describe("<Blog />", () => {
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
