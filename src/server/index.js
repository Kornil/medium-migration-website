import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { renderStylesToString } from "emotion-server";
import https from "https";
import "isomorphic-fetch";

import App from "../client/app/App.tsx";
import htmlMarkup from "./htmlMarkup";
import storiesUrls from "./storiesUrls.json";

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

app.get("/medium-api", async (req, res) => {
  const url = req.query.url;
  if (url) {
    https
      .get(`${url}?format=json`, resp => {
        let data = "";
        resp.on("data", chunk => {
          data += chunk;
        });
        resp.on("end", () => {
          res.send(JSON.parse(data.replace("])}while(1);</x>", "")));
        });
      })
      .on("error", err => {
        res.send("Error: " + err.message);
      });
  } else {
    res.json(storiesUrls);
  }
});

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
