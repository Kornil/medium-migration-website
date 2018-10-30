import React from "react";

import { Cta } from "app/components/shared";
import { StyledLoading } from "app/styled-components";

const LoadingPage: React.SFC<{}> = () => (
  <Cta title={<StyledLoading />}>
    <em>Just a moment...</em>
  </Cta>
);

export default LoadingPage;
