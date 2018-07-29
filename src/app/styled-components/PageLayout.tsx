import styled from "./styled-components";

const PageLayout = styled.div`
  height: inherit;
  background-color: #fff;
  color: #111;
  padding: 0 18px;
  grid-template-areas:
    "nav nav"
    "main  main";
  grid-template-rows: 50px 1fr;
`;

export default PageLayout;
