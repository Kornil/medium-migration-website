import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Blog, Home } from "app/components";
import Routes from "./Routes";

describe("Routes", () => {
  it("default path should redirect to Home component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it("/blog path should redirect to Blog component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/blog"]} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(Blog)).toHaveLength(1);
  });
});
