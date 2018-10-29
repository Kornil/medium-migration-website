import React from "react";

import { StyledBody, StyledEm, StyledTitle } from "app/styled-components";

import StoriesContext from "app/context/StoriesContext";

import { ArticleCard } from "./components";
import StoryInterface from "./interfaces/StoryInterface";

export const Blog: React.SFC<{
  StoriesContext: { stories: StoryInterface[] };
}> = props => {
  return (
    <StyledBody>
      <StyledTitle>
        <h1>My Articles</h1>
        <StyledEm>
          Thoughts on Web Development, my projects and my career.
        </StyledEm>
      </StyledTitle>
      {props.StoriesContext.stories && props.StoriesContext.stories.length
        ? props.StoriesContext.stories.map((story: StoryInterface) => (
            <ArticleCard key={story.title} story={story} />
          ))
        : null}
    </StyledBody>
  );
};

export default StoriesContext.connect(Blog);
