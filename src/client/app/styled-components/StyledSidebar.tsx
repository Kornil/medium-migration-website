import styled from "@emotion/styled";

const StyledSidebar = styled.h3`
  text-align: center;
  margin: 0;

  @media (max-width: 425px) {
    grid-row: 1;
    text-align: start;
    color: #7d7d7d;
    font-weight: normal;
    font-size: 1.1em;
  }
`;

export default StyledSidebar;
