import styled from "@emotion/styled";

import { lightTextColor } from "app/styled-components/styled-constants";

const StyledEditor = styled.div`
  margin-bottom: 32px;

  blockquote {
    font-family: "Lucida Console", Monaco, monospace;
    background: #565656;
    color: #dfdfdf;

    padding: 1em 0;
    border-radius: 2px;
    margin: 1em 0;
    display: grid;
    grid-template-columns: 0.05fr 1fr;
    > * {
      grid-column: 2;
    }
  }

  figure {
    margin: 0;
  }

  figcaption {
    padding-top: 4px;
    font-style: italic;
    text-align: center;
    color: ${lightTextColor};
    font-size: 0.85em;
  }

  em {
    color: inherit;
  }

  a {
    text-decoration: underline;
  }
`;

export default StyledEditor;
