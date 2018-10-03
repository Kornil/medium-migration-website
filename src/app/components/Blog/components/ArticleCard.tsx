import React from "react";
import styled from "react-emotion";

import { StyledEm } from "app/styled-components";
import { getDateFromUnix } from "app/utils";

import StoryInterface from "../interfaces/StoryInterface";

const StyledArticleCard = styled.section`
  margin-bottom: 48px;

  a {
    color: #3d3d3d;
    text-decoration: none;

    :hover {
      color: #1f1f1f;
    }
  }

  h3 {
    font-weight: normal;
    margin: 8px 0 12px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const ArticleCard: React.SFC<{ story: StoryInterface }> = ({ story }) => (
  <StyledArticleCard>
    <a href={story.link}>
      <h3>{story.title}</h3>
      <p>
        <StyledEm>{getDateFromUnix(story.publishedAt)}</StyledEm>
      </p>
    </a>
  </StyledArticleCard>
);

export default ArticleCard;
