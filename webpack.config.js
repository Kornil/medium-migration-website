const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const dev = process.env.NODE_ENV !== "production";

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: "index.html",
  filename: "index.html",
  inject: true
});

const DefinePluginConfig = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production")
});

const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin(
  "public/images/favicon-256.png"
);

const PWAManifestConfig = new WebpackPwaManifest({
  name: "Francesco Agnoletto Website",
  short_name: "FA Blog",
  description: "Front end web engineer, click and check my work.",
  theme_color: "#dfdfdf",
  background_color: "#dfdfdf",
  display: "fullscreen",
  start_url: "francesco-agnoletto.com"
});

module.exports = {
  context: path.join(__dirname, "src"),
  devServer: {
    host: "localhost",
    port: "3000",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      public: path.resolve(__dirname, "src/public/"),
      app: path.resolve(__dirname, "src/app/")
    }
  },
  entry: [
    "whatwg-fetch",
    "react-hot-loader/patch",
    path.join(__dirname, "/src/index.tsx")
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "/build")
  },
  mode: dev ? "development" : "production",
  plugins: dev
    ? [
        HTMLWebpackPluginConfig,
        FaviconsWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin()
      ]
    : [
        HTMLWebpackPluginConfig,
        FaviconsWebpackPluginConfig,
        DefinePluginConfig,
        PWAManifestConfig
      ]
};
