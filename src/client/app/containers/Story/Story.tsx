import React from "react";

import { Editor } from "app/containers";
import { StyledBody } from "app/styled-components";

import { RightSidebar } from "./components";

const Story: React.SFC<{ cached: boolean; story: any }> = props => {
  const { cached, story } = props;
  return (
    <StyledBody>
      <div />
      <Editor
        mediumValue={{
          content: story.content,
          firstPublishedAt: story.firstPublishedAt,
          mediumUrl: story.mediumUrl
        }}
        cached={cached}
      />
      <RightSidebar date={story.firstPublishedAt} />
    </StyledBody>
  );
};

export default Story;
