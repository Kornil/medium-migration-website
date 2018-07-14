const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

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
  path.join(__dirname, "/src/public/images/favicon-256.png")
);

module.exports = {
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
  entry: ["react-hot-loader/patch", path.join(__dirname, "/src/app/index.tsx")],
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
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader",
        options: {
          limit: 10000
        }
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
        FaviconsWebpackPluginConfig,
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin()
      ]
    : [FaviconsWebpackPluginConfig, HTMLWebpackPluginConfig, DefinePluginConfig]
};
