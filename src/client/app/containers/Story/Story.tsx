import React from "react";

const Story: React.SFC<{ story: any }> = props => (
  <p>{props.story.value.title}</p>
);

export default Story;
