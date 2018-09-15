import React from "react";

import OwnerContext from "app/shared/OwnerContext";
import { StyledCta } from "app/styled-components";

const Cta = (props: any) => (
  <StyledCta.Container>
    <StyledCta.Header>{props.OwnerContext.name}</StyledCta.Header>
    <p>
      <em>I breathe JavaScript</em>
    </p>
  </StyledCta.Container>
);

export default OwnerContext.connect(Cta);
