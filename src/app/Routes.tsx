import * as React from "react";
import { Route, RouteProps, Switch } from "react-router-dom";
import { About, Home } from "./components";

const Routes = () => (
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
