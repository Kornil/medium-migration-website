import React from "react";
import { Route, Switch } from "react-router-dom";

import { Blog, Home } from "app/components";

const Routes: React.SFC<{}> = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/blog" component={Blog} />
  </Switch>
);

export default Routes;
