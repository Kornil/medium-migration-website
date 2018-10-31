import React, { PureComponent } from "react";
import { match } from "react-router-dom";

import { LoadingPage, NotFound } from "app/components";
import StoriesContext, { StoryInterface } from "app/context/StoriesContext";

import Story from "./Story";

interface StoryPageMatcherProps {
  match: match<{ id: string }>;
  StoriesContext: { stories: StoryInterface[] };
}

interface StoryPageMatcherState {
  status: "loading" | "notFound" | "success" | "error";
  story: object | null;
  isContextReady: boolean;
}

export class StoryPageMatcher extends PureComponent<
  StoryPageMatcherProps,
  StoryPageMatcherState
> {
  state: StoryPageMatcherState = {
    isContextReady: false,
    status: "loading",
    story: null
  };

  fetchStory = async () => {
    const { stories } = this.props.StoriesContext;

    const filteredStory = stories.find(story =>
      story.link.includes(this.props.match.params.id)
    );

    if (filteredStory) {
      try {
        const response = await fetch(`/medium-api?url=${filteredStory.link}`);
        const { payload } = await response.json();

        this.setState({
          status: "success",
          story: payload
        });
      } catch (error) {
        this.setState({
          status: "error"
        });
      }
    } else {
      this.setState({
        status: "notFound"
      });
    }
  };

  async componentDidMount() {
    if (
      this.props.StoriesContext.stories &&
      this.props.StoriesContext.stories.length > 0
    ) {
      await this.fetchStory();
    }
  }

  componentDidUpdate(prevProps: StoryPageMatcherProps) {
    if (
      !this.state.isContextReady &&
      prevProps.StoriesContext.stories.length === 0 &&
      this.props.StoriesContext.stories.length > 0
    ) {
      this.fetchStory();
    }
  }

  render() {
    const { status, story } = this.state;
    switch (status) {
      case "loading":
        return <LoadingPage />;
      case "success":
        return <Story story={story} />;
      case "notFound":
        return <NotFound />;
      case "error":
        return <p>something went wrong, try refreshing the page.</p>;
    }
  }
}

export default StoriesContext.connect(StoryPageMatcher);
