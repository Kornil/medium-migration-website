import styled from "react-emotion";

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

  p {
    font-size: 1.1em;
    line-height: 1.58;
  }
`;

export default PageLayout;
