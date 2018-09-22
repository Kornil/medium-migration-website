import React from "react";
import { Route, Switch } from "react-router-dom";

import { Blog, Home } from "app/components";

interface RoutesInterface {
  Component: React.SFC<any> | typeof React.Component;
  path: string;
}

// set all routes here
export const routes: RoutesInterface[] = [
  {
    Component: Home,
    path: "/"
  },
  {
    Component: Blog,
    path: "/blog"
  }
];

const Routes: React.SFC<{}> = () => {
  const routeComponents = routes.map(({ path, Component }, key) => (
    <Route exact path={path} component={Component} key={key} />
  ));
  return <Switch>{routeComponents}</Switch>;
};

export default Routes;
