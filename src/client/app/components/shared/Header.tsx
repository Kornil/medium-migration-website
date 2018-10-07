import React from "react";
import styled from "react-emotion";

import { NavLink } from "app/styled-components";

const StyledHeader = styled.header`
  padding: 8px 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
