import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { renderStylesToString } from "emotion-server";
import "isomorphic-fetch";

import App from "../client/app/App.tsx";
import htmlMarkup from "./htmlMarkup";

// webpack stuff for hot-reload
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../../webpack.config";

require("es6-promise").polyfill();

const app = express();

const compiler = webpack(webpackConfig[0]);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig[0].output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: 3000`);
});
