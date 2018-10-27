import React from "react";
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

const Cta: React.SFC<{ title: string; body: React.ReactNode }> = ({
  title,
  body
}) => (
  <StyledCta.Container>
    <StyledCta.Header>{title}</StyledCta.Header>
    {body}
  </StyledCta.Container>
);

export default Cta;
