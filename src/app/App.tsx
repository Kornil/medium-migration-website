// <reference path='./index.d.ts'/>

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

import { Header, NavLink, PageLayout } from "app/styled-components";

import reactLogo from "public/images/React-icon.png";

export const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <PageLayout>
      <Header>
        <NavLink activeClassName="active" exact to="/">
          home
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          about
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          contact
        </NavLink>
      </Header>
      <h2>asd</h2>
      <img
        style={{ width: "100px" }}
        className="container__image"
        alt="react logo"
        src={reactLogo}
      />
      <p>If you see this everything is working!</p>
      <Routes />
    </PageLayout>
  </BrowserRouter>
);
