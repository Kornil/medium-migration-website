import { shallow } from "enzyme";
import React from "react";

import ArticleCard from "./ArticleCard";

const story = {
  link: "www.google.com",
  publishedAt: 1530736049131,
  title: "hello"
};

it("it renders", () => {
  const wrapper = shallow(<ArticleCard story={story} />);
  expect(wrapper).toMatchSnapshot();
});
