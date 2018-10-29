import React from "react";
import { match } from "react-router-dom";

import { NotFound } from "app/components";
import StoriesContext, { StoryInterface } from "app/context/StoriesContext";

interface StoryPageProps {
  match: match<{ id: string }>;
  StoriesContext: { stories: StoryInterface[] };
}

export const StoryPageMatcher: React.SFC<StoryPageProps> = props => {
  if (props.StoriesContext.stories && props.StoriesContext.stories.length) {
    const filteredStory = props.StoriesContext.stories.find(
      story => story.title === props.match.params.id
    );
    return filteredStory ? <p>{props.match.params.id}</p> : <NotFound />;
  } else {
    return null;
  }
};

export default StoriesContext.connect(StoryPageMatcher);
