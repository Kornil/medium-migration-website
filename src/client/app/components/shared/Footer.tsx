import React from "react";
import styled from "react-emotion";

import OwnerContext, {
  OwnerContextValueInterface
} from "app/context/OwnerContext";

import { StyledA } from "app/styled-components";
import GithubLogo from "assets/github-brands.svg";
import LinkedinLogo from "assets/linkedin-in-brands.svg";
import TwitterLogo from "assets/twitter-brands.svg";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0 48px;
  }
`;

const Footer: React.SFC<{
  OwnerContext: OwnerContextValueInterface;
}> = props => (
  <StyledFooter>
    <StyledA href={props.OwnerContext.socials.github}>
      <GithubLogo
        role="img"
        aria-label="GitHub profile"
        width="25px"
        height="25px"
      />
    </StyledA>
    <StyledA href={props.OwnerContext.socials.linkedin}>
      <LinkedinLogo
        role="img"
        aria-label="Linkedin profile"
        width="25px"
        height="25px"
      />
    </StyledA>
    <StyledA href={props.OwnerContext.socials.twitter}>
      <TwitterLogo
        role="img"
        aria-label="Twitter profile"
        width="25px"
        height="25px"
      />
    </StyledA>
  </StyledFooter>
);

export default OwnerContext.connect(Footer);
