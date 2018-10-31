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

  /* default h1 style*/
  h1 {
    margin: 0 0 16px;
  }
`;

export default PageLayout;
