import React from "react";

import { Editor } from "app/containers";
import { StyledBody } from "app/styled-components";

import { RightSidebar } from "./components";
import { MediumStoryInterface } from "./MediumStoryInterface";

const Story: React.SFC<{ story: MediumStoryInterface }> = props => {
  const { story } = props;
  return (
    <StyledBody>
      <div />
      <Editor story={story} />
      <RightSidebar date={story.firstPublishedAt} />
    </StyledBody>
  );
};

export default Story;
