import React from "react";

import { Editor } from "app/containers";
import { StyledBody } from "app/styled-components";

import { RightSidebar } from "./components";

const Story: React.SFC<{ story: any }> = props => {
  const { story } = props;
  return (
    <StyledBody>
      <div />
      <Editor mediumValue={story.content} />
      <RightSidebar date={story.firstPublishedAt} />
    </StyledBody>
  );
};

export default Story;
