import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import Routes, { routes } from "./Routes";

describe("Routes", () => {
  for (const { Component, path } of routes) {
    it(`${path} path should redirect to ${Component.name} component`, () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[path]} initialIndex={0}>
          <Routes />
        </MemoryRouter>
      );
      expect(wrapper.find(Component)).toHaveLength(1);
    });
  }
});
