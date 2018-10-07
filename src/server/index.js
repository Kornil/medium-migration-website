import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { renderStylesToString } from "emotion-server";

import { App } from "../client/app/App";
import htmlMarkup from "./htmlMarkup";

require("es6-promise").polyfill();
import "isomorphic-fetch";

const app = express();

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const context = {};
  const markup = renderStylesToString(
    renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.send(htmlMarkup(markup));
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: 3000`);
});
