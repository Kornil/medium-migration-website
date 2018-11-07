import dotenv from "dotenv";
import express from "express";
import https from "https";
import mongoose from "mongoose";

import "es6-promise/auto";
import "isomorphic-fetch";

import { renderStylesToString } from "emotion-server";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../client/app/App";
import htmlMarkup from "./htmlMarkup";
import storiesUrls from "./storiesUrls.json";

// webpack stuff for hot-reload
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
// @ts-ignore
import webpackConfig from "../../webpack.config";

// @ts-ignore
import Story from "./StorySchema";

dotenv.config();

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_USER);

/* istanbul ignore next */
if (process.env.NODE_ENV === "development") {
  const compiler = webpack(webpackConfig[0]);
  app.use(
    webpackDevMiddleware(compiler, {
      // noInfo: true,
      publicPath: webpackConfig[0].output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static("public"));

app.get("/medium-api", async (req, res) => {
  const url = req.query.url;
  if (url) {
    Story.findOne({ mediumUrl: url }, (err: Error, data: any) => {
      res.json(data);
    });
  } else {
    res.json(storiesUrls);
  }
});

interface ContextInterface {
  url?: string;
  statusCode?: number;
}

app.get("*", (req, res) => {
  const context: ContextInterface = {};
  const markup = renderStylesToString(
    renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )
  );

  /* istanbul ignore next */
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  }
  res.send(htmlMarkup(markup));
});

export default app;
