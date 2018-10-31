import React from "react";

import { StyledBody, StyledTitle } from "app/styled-components";

import StoriesContext, { StoryInterface } from "app/context/StoriesContext";

import { ArticleCard } from "./components";

export const Blog: React.SFC<{
  StoriesContext: { stories: StoryInterface[] };
}> = props => {
  return (
    <StyledBody>
      <StyledTitle>
        <h1>My Articles</h1>
        <em>Thoughts on Web Development, my projects and my career.</em>
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
