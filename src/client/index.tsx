import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";

import { App } from "app/App";

const root = document.getElementById("root") as HTMLElement;

const render = (Component: React.SFC) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept("app/App", () => {
    render(App);
  });
}
