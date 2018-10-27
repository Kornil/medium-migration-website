import React from "react";

import { Cta, RouteWithStatus } from "app/components/shared";

const NotFound: React.SFC<{}> = () => (
  <RouteWithStatus code={404}>
    <Cta title="404 - Not Found">
      <p>This is not the web page you are looking for.</p>
    </Cta>
  </RouteWithStatus>
);

export default NotFound;
