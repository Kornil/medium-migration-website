import React from "react";

import OwnerContext, {
  OwnerContextValueInterface
} from "app/context/OwnerContext";

import { Cta } from "app/components/shared";

const Home: React.SFC<{ OwnerContext: OwnerContextValueInterface }> = props => (
  <Cta
    title={props.OwnerContext.name}
    body={
      <p>
        <em>I breathe JavaScript</em>
      </p>
    }
  />
);

export default OwnerContext.connect(Home);
