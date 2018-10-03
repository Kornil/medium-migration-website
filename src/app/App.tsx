// <reference path='./index.d.ts'/>

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

import { Footer, Header } from "app/components/shared";
import OwnerContext, { ownerContextValue } from "app/context/OwnerContext";
import { PageLayout } from "app/styled-components";

// import reactLogo from "public/images/React-icon.png";

export const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <OwnerContext.Provider value={ownerContextValue}>
      <PageLayout>
        <Header />
        <Routes />
        <Footer />
      </PageLayout>
    </OwnerContext.Provider>
  </BrowserRouter>
);
