// <reference path='./index.d.ts'/>

import React from "react";

import Routes from "app/Routes";

import { Footer, Header } from "app/components/shared";
import OwnerContext, { ownerContextValue } from "app/context/OwnerContext";
import { PageLayout } from "app/styled-components";

// import reactLogo from "assets/images/React-icon.png";

export const App: React.SFC<{}> = () => (
  <OwnerContext.Provider value={ownerContextValue}>
    <PageLayout>
      <Header />
      <Routes />
      <Footer />
    </PageLayout>
  </OwnerContext.Provider>
);
