import { shallow } from "enzyme";
import React from "react";

import EditorWrapper from "./";

const fakeValue = {
  content: {},
  firstPublishedAt: Date.now(),
  mediumUrl: "https://google.com"
};

describe("<EditorWrapper />", () => {
  it("hidrates from cache if available", async () => {
    const wrapper = shallow(
      <EditorWrapper mediumValue={fakeValue} cached={true} />
    );
    const instance = wrapper.instance() as EditorWrapper;
    const spy = spyOn(instance, "MediumToSlateConverter");

    await instance.componentDidMount();

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
