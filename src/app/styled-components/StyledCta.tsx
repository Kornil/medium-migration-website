import styled, { StyledComponent } from "react-emotion";

interface StyledCtaInterface {
  [key: string]: StyledComponent<{}, any, any>;
}

const StyledCta: StyledCtaInterface = {
  Container: styled.section`
    align-self: center;
    justify-self: center;
  `,
  Header: styled.h1`
    margin-top: 0;
  `
};

export default StyledCta;
