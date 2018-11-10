import React from "react";
import styled from "react-emotion";

import { NavLink } from "app/styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px 0;
  height: 40px;
  align-items: center;

  ${NavLink}:nth-of-type(1) {
    text-align: end;
  }
  ${NavLink}:nth-of-type(3) {
    text-align: start;
  }
`;

const Header: React.SFC<{}> = () => (
  <StyledHeader>
    <NavLink activeClassName="active" exact to="/">
      home
    </NavLink>
    <NavLink activeClassName="active" to="/blog">
      blog
    </NavLink>
    <NavLink activeClassName="active" to="/contact">
      contact
    </NavLink>
  </StyledHeader>
);

export default Header;
