import styled from "@emotion/styled";

import { lightTextColor, textColor } from "./styled-constants";

const PageLayout = styled.div`
  min-height: 100%;
  padding: 0;
  margin: 0;
  background-color: #dfdfdf;
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
  color: ${textColor};
  text-align: center;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 0.3fr 1fr 0.3fr;

  > * {
    grid-column: 2;
  }

  @media (max-width: 769px) {
    grid-template-columns: 0.2fr 1fr 0.2fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    > * {
      grid-column: 1;
    }
  }

  /* fix scrollbar issue */
  padding-left: calc(100vw - 100%);

  /* default em style */
  em {
    margin: 0;
    color: ${lightTextColor};
  }

  /* default link style */
  a {
    color: #3d3d3d;
    text-decoration: none;

    :hover {
      color: #1f1f1f;
    }
  }

  /* default h styles*/
  h1 {
    margin: 0 0 16px;
    font-size: 2em;
  }

  h2 {
    color: ${lightTextColor};
    font-size: 1.5em;
    margin: 0 0 32px;
    font-weight: normal;
  }

  h3 {
    font-size: 1.3em;
  }

  p,
  li {
    font-size: 1.1em;
    line-height: 1.58;
  }

  li {
    margin: 8px 0;
  }
`;

export default PageLayout;
