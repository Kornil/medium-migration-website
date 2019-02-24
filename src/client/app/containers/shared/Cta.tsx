import React from "react";
import styled, { StyledComponent } from "@emotion/styled";

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

const Cta: React.SFC<{
  title: string | React.ReactNode;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <StyledCta.Container>
    <StyledCta.Header>{title}</StyledCta.Header>
    {children}
  </StyledCta.Container>
);

export default Cta;
