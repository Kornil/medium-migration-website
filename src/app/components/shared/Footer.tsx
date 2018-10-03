import React from "react";
import styled from "react-emotion";

import { StyledLink } from "app/styled-components";
import GithubLogo from "public/github-brands.svg";
import LinkedinLogo from "public/linkedin-in-brands.svg";
import TwitterLogo from "public/twitter-brands.svg";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0 48px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledLink href="">
      <GithubLogo width="25px" height="25px" />
    </StyledLink>
    <StyledLink href="">
      <LinkedinLogo width="25px" height="25px" />
    </StyledLink>
    <StyledLink href="">
      <TwitterLogo width="25px" height="25px" />
    </StyledLink>
  </StyledFooter>
);

export default Footer;
