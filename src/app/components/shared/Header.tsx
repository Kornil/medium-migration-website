import React from "react";

import { NavLink, StyledHeader } from "app/styled-components";

const Header: React.SFC<{}> = () => (
  <StyledHeader>
    <NavLink activeClassName="active" exact to="/">
      home
    </NavLink>
    <NavLink activeClassName="active" to="/about">
      about
    </NavLink>
    <NavLink activeClassName="active" to="/contact">
      contact
    </NavLink>
  </StyledHeader>
);

export default Header;
