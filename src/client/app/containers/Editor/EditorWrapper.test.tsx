import { shallow } from "enzyme";
import React from "react";

import storyTest from "app/containers/Story/test-story.json";

import EditorWrapper from "./";
import initialValue from "./initialValue";

const fakeValue = {
  content: storyTest,
  firstPublishedAt: Date.now(),
  mediumUrl: "https://google.com"
};

describe("<EditorWrapper />", () => {
  it("hidrates from cache if available", async () => {
    const wrapper = shallow(
      <EditorWrapper story={{ ...fakeValue, cached: initialValue }} />
    );
    const instance = wrapper.instance() as EditorWrapper;
    const spy = spyOn(instance, "MediumToSlateConverter");

    await instance.componentDidMount();

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
