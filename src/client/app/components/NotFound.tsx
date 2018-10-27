import React from "react";

import { RouteWithStatus } from "app/components/shared";

const NotFound: React.SFC<{}> = () => (
  <RouteWithStatus code={404}>
    <p>404 - not found</p>
  </RouteWithStatus>
);

export default NotFound;
