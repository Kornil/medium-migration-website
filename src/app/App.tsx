// <reference path='./index.d.ts'/>

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

import { Header } from "app/components/shared";
import { PageLayout } from "app/styled-components";

import reactLogo from "public/images/React-icon.png";

export const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <PageLayout>
      <Header />
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
