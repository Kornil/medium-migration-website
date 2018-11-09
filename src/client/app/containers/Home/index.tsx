import React from "react";

import OwnerContext, {
  OwnerContextValueInterface
} from "app/context/OwnerContext";

import { Cta } from "app/containers/shared";

const Home: React.SFC<{ OwnerContext: OwnerContextValueInterface }> = props => (
  <Cta title={props.OwnerContext.name}>
    <p>
      <em>I breathe JavaScript</em>
    </p>
  </Cta>
);

export default OwnerContext.connect(Home);
