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
    const mediumKey = "medium_data";

    const mediumData = localStorage.getItem(mediumKey);
    if (mediumData) {
      this.setState({
        stories: JSON.parse(mediumData)
      });
    }
    try {
      const response: Response = await fetch("https://medium-api.now.sh/");

      const { payload }: { payload: StoryInterface[] } = await response.json();
      this.setState({
        status: "success",
        stories: payload
      });
      localStorage.setItem(mediumKey, JSON.stringify(payload));
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
        <StyledTitle>
          <h1>My Articles</h1>
          <StyledEm>
            Thoughts on Web Development, my projects and my career.
          </StyledEm>
        </StyledTitle>
        {stories.map((story: StoryInterface) => (
          <ArticleCard key={story.title} story={story} />
        ))}
      </StyledBody>
    );
  }
}

export default Blog;
