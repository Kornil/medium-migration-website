import * as offlinePluginRuntime from "offline-plugin/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AppContainer } from "react-hot-loader";

import App from "./app/App";

offlinePluginRuntime.install({
  onUpdateReady: () => offlinePluginRuntime.applyUpdate(),
  onUpdated: () => location.reload()
});

const root = document.getElementById("root") as HTMLElement;

const render = (Component: React.SFC | typeof React.Component) => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./app/App", () => {
    render(App);
  });
}
