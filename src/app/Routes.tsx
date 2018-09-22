import React from "react";
import { Route, Switch } from "react-router-dom";

import { About, Home } from "app/components";

const Routes: React.SFC<{}> = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
