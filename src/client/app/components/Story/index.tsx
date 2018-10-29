import React from "react";
import { match } from "react-router-dom";

const Story: React.SFC<{ match: match<{ id: string }> }> = props => (
  <p>{props.match.params.id}</p>
);

export default Story;
