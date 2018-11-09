import React from "react";
import { Route, Switch } from "react-router-dom";

import { Blog, Home, NotFound, Story } from "app/containers";

interface RoutesInterface {
  Component: React.SFC<any> | typeof React.Component;
  exact?: boolean;
  path?: string;
}

// set all routes here
export const routes: RoutesInterface[] = [
  {
    Component: Home,
    exact: true,
    path: "/"
  },
  {
    Component: Blog,
    exact: true,
    path: "/blog"
  },
  {
    Component: Story,
    exact: true,
    path: "/blog/:id"
  },
  {
    Component: NotFound
  }
];

const Routes: React.SFC<{}> = () => {
  const routeComponents = routes.map(({ Component, exact, path }, key) => {
    return <Route exact={exact} path={path} component={Component} key={key} />;
  });
  return <Switch>{routeComponents}</Switch>;
};

export default Routes;
