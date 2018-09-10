import styled, { StyledComponent } from "react-emotion";

interface StyledCtaInterface {
  [key: string]: StyledComponent<{}, any, any>;
}

const StyledCta: StyledCtaInterface = {
  Container: styled.section``,
  Header: styled.h1``
};

export default StyledCta;
