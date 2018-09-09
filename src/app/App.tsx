// <reference path='./index.d.ts'/>

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

import { Cta, Header } from "app/components/shared";
import OwnerContext, { ownerContextValue } from "app/shared/OwnerContext";
import { PageLayout } from "app/styled-components";

// import reactLogo from "public/images/React-icon.png";

export const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <OwnerContext.Provider value={ownerContextValue}>
      <PageLayout>
        <Header />
        <Cta />
        <Routes />
      </PageLayout>
    </OwnerContext.Provider>
  </BrowserRouter>
);
