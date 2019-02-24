import styled from "@emotion/styled";

const StyledBody = styled.section`
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  padding: 16px 0;
  margin: 80px 0 0 0;
  text-align: start;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    padding: 1em;
  }
`;

export default StyledBody;
