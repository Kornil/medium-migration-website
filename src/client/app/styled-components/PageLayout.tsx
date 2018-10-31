import styled from "react-emotion";

const PageLayout = styled.div`
  min-height: 100%;
  padding: 0;
  margin: 0;
  background-color: #dfdfdf;
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
  color: #333;
  text-align: center;
  display: grid;
  grid-template-rows: 50px 1fr 50px;

  /* fix scrollbar issue */
  padding-left: calc(100vw - 100%);

  /* default em style */
  em {
    margin: 0;
    color: #595959;
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
    margin-bottom: 16px;
    font-size: 2em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1.5em;
  }
`;

export default PageLayout;
