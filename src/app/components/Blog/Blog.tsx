import React, { Component } from "react";

import { StyledBody, StyledEm, StyledTitle } from "app/styled-components";

import { ArticleCard } from "./components";
import StoryInterface from "./interfaces/StoryInterface";

class Blog extends Component {
  state = {
    errorMessage: "",
    status: null,
    stories: []
  };

  componentDidMount() {
    this.fetchMediumStories();
  }

  fetchMediumStories = async () => {
    try {
      const response: Response = await fetch("https://medium-api.now.sh/");

      const { payload }: { payload: StoryInterface[] } = await response.json();
      this.setState({
        status: "success",
        stories: payload
      });
    } catch (error) {
      this.setState({
        errorMessage: error,
        status: "error"
      });
    }
  };

  render() {
    const { stories } = this.state;
    return (
      <StyledBody>
        <section>
          <StyledTitle>
            <h1>My Articles</h1>
            <StyledEm>
              Toughts on Web Development, my projects and my career.
            </StyledEm>
          </StyledTitle>
          {stories.map((story: StoryInterface) => (
            <ArticleCard key={story.title} story={story} />
          ))}
        </section>
      </StyledBody>
    );
  }
}

export default Blog;
