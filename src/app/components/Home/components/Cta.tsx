import React from "react";

import OwnerContext, {
  OwnerContextValueInterface
} from "app/context/OwnerContext";
import StyledCta from "./StyledCta";

const Cta: React.SFC<{ OwnerContext: OwnerContextValueInterface }> = props => (
  <StyledCta.Container>
    <StyledCta.Header>{props.OwnerContext.name}</StyledCta.Header>
    <p>
      <em>I breathe JavaScript</em>
    </p>
  </StyledCta.Container>
);

export default OwnerContext.connect(Cta);
