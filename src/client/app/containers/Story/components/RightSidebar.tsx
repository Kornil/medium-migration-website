import React from "react";

import { StyledSidebar } from "app/styled-components";
import { getDateFromUnix } from "app/utils";

const RightSidebar: React.SFC<{ date: number }> = ({ date }) => (
  <StyledSidebar>{getDateFromUnix(date)}</StyledSidebar>
);

export default RightSidebar;
