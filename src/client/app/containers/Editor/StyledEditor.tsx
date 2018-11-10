import styled from "react-emotion";

import { lightTextColor } from "app/styled-components/styled-constants";

const StyledEditor = styled.div`
  margin-bottom: 32px;

  blockquote {
    font-family: "Lucida Console", Monaco, monospace;
    background: repeating-linear-gradient(
      45deg,
      #d2d2d2,
      #d2d2d2 8px,
      #dfdfdf 8px,
      #dfdfdf 16px
    );

    padding: 1em 0;
    border-radius: 4px;
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
