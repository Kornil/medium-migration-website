import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";

import { Blog, Home } from "app/components";

interface RoutesInterface {
  Component: React.SFC<any> | typeof React.Component;
  name: string;
  path: string;
}

// set all routes here
export const routes: RoutesInterface[] = [
  {
    Component: Home,
    name: "Home",
    path: "/"
  },
  {
    Component: Blog,
    name: "Blog",
    path: "/blog"
  }
];

const Routes: React.SFC<{}> = () => {
  const routeComponents = routes.map(({ path, name, Component }, key) => {
    // @ts-ignore
    const LoadableComponent = Loadable({
      loader: () => import(`app/components/${name}`),
      loading: <div>Loading</div>
    });
    return (
      <Route
        exact
        path={path}
        component={module.hot ? Component : LoadableComponent}
        key={key}
      />
    );
  });
  return <Switch>{routeComponents}</Switch>;
};

export default Routes;
