import React from "react";
import { Route, RouteProps, Switch } from "react-router-dom";

import { About, Home } from "app/components";

const Routes: React.SFC<{}> = () => (
  <Switch>
    <Route
      exact
      path="/"
      // tslint:disable-next-line:jsx-no-lambda
      render={(routeProps: RouteProps) => (
        <Home {...routeProps} user="Default User" />
      )}
    />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
