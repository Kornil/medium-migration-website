import React from "react";
import styled from "@emotion/styled";

import OwnerContext, {
  OwnerContextValueInterface
} from "app/context/OwnerContext";

import GithubLogo from "assets/github-brands.svg";
import LinkedinLogo from "assets/linkedin-in-brands.svg";
import TwitterLogo from "assets/twitter-brands.svg";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  a:nth-of-type(1) {
    text-align: end;
  }
  a:nth-of-type(3) {
    text-align: start;
  }
`;

const Footer: React.SFC<{
  OwnerContext: OwnerContextValueInterface;
}> = props => (
  <StyledFooter>
    <a href={props.OwnerContext.socials.github}>
      <GithubLogo
        role="img"
        aria-label="GitHub profile"
        width="25px"
        height="25px"
      />
    </a>
    <a href={props.OwnerContext.socials.linkedin}>
      <LinkedinLogo
        role="img"
        aria-label="Linkedin profile"
        width="25px"
        height="25px"
      />
    </a>
    <a href={props.OwnerContext.socials.twitter}>
      <TwitterLogo
        role="img"
        aria-label="Twitter profile"
        width="25px"
        height="25px"
      />
    </a>
  </StyledFooter>
);

export default OwnerContext.connect(Footer);
