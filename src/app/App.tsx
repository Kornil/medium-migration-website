// <reference path='./index.d.ts'/>

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

import { Cta, Header } from "app/components/shared";
import { PageLayout } from "app/styled-components";

// import reactLogo from "public/images/React-icon.png";

export const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <PageLayout>
      <Header />
      <Cta />
      <Routes />
    </PageLayout>
  </BrowserRouter>
);
