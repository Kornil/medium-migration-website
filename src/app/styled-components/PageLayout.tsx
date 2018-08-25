import styled from "react-emotion";

const PageLayout = styled.div`
  height: inherit;
  background-color: #fff;
  color: #111;
  grid-template-areas:
    "nav nav"
    "main  main";
  grid-template-rows: 50px 1fr;
`;

export default PageLayout;
