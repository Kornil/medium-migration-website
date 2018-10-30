import React from "react";
import styled, { keyframes } from "react-emotion";

import Spinner from "assets/spinner-third-light.svg";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled(Spinner)`
  animation: ${rotate} 1s ease infinite;
  animation-timing-function: linear;
  width: 33px;
  height: 33px;
`;

export default StyledLoading;
