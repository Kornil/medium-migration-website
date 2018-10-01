import React, { Component } from "react";

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
      const response: any = await fetch(
        "https://medium-fake-api-vgwjykskau.now.sh"
      );

      const data = await response.json();
      this.setState({
        status: "success",
        stories: data
      });
    } catch (error) {
      this.setState({
        errorMessage: error,
        status: "error"
      });
    }
  };

  render() {
    return <div />;
  }
}

export default Blog;
