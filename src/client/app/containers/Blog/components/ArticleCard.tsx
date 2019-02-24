import React from "react";
import styled from "@emotion/styled";

import { StyledLink } from "app/styled-components";
import { getDateFromUnix } from "app/utils";

import { StoryInterface } from "app/context/StoriesContext";

const StyledArticleCard = styled.section`
  margin-bottom: 48px;

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
    <StyledLink
      to={`/blog/${story.link.replace(
        "https://medium.com/@francesco.agnoletto/",
        ""
      )}`}
    >
      <h3>{story.title}</h3>
      <p>
        <em>{getDateFromUnix(story.publishedAt)}</em>
      </p>
    </StyledLink>
  </StyledArticleCard>
);

export default ArticleCard;
