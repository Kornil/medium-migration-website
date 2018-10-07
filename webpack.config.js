const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const nodeExternals = require("webpack-node-externals");
const createFileWebpack = require("create-file-webpack");

const dev = process.env.NODE_ENV !== "production";

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: "client/index.html",
  filename: "index.html",
  inject: true
});

const DefinePluginConfig = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production")
});

const PWAManifestConfig = new WebpackPwaManifest({
  filename: "manifest.json",
  name: "Francesco Agnoletto Website",
  short_name: "FA Blog",
  description: "Front end web engineer, click and check my work.",
  theme_color: "#dfdfdf",
  background_color: "#dfdfdf",
  display: "fullscreen",
  start_url: "francesco-agnoletto.com",
  icons: [
    {
      src: "assets/images/pwa-192x192.png",
      size: "192x192"
    },
    {
      src: "assets/images/pwa-512x512.png",
      size: "512x512"
    }
  ]
});

const createRobot = new createFileWebpack({
  path: "./public",
  fileName: "robots.txt",
  content: `
    User-agent: * 
    Disallow: 
  `
});

const clientConfig = {
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
      assets: path.resolve(__dirname, "src/client/assets/"),
      app: path.resolve(__dirname, "src/client/app/")
    }
  },
  entry: [
    "whatwg-fetch",
    "react-hot-loader/patch",
    path.join(__dirname, "/src/client/index.tsx")
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
    filename: "bundle.js",
    path: path.join(__dirname, "/public"),
    publicPath: "/"
  },
  mode: dev ? "development" : "production",
  plugins: dev
    ? [new webpack.HotModuleReplacementPlugin(), HTMLWebpackPluginConfig]
    : [DefinePluginConfig, PWAManifestConfig, createFileWebpack, createRobot]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      assets: path.resolve(__dirname, "src/client/assets/"),
      app: path.resolve(__dirname, "src/client/app/")
    }
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "server.js",
    publicPath: "/"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
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
  }
};

module.exports = [clientConfig, serverConfig];
