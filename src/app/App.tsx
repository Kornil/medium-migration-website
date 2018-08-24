// <reference path='./index.d.ts'/>

import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Routes from "./Routes";

import { Header, PageLayout } from "app/styled-components";

import reactLogo from "public/images/React-icon.png";

export const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <PageLayout>
      <Header>
        <h1>hello world!</h1>
      </Header>
      <h2>asd</h2>
      <img className="container__image" alt="react logo" src={reactLogo} />
      <p>If you see this everything is working!</p>
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes />
    </PageLayout>
  </BrowserRouter>
);
