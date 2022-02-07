const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require("../package.json").dependencies;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8086/',
  },
  devtool: "eval-source-map",
  devServer: {
    port: 8086,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "@uirouter/react": {
          singleton: true,
          requiredVersion: deps["@uirouter/react"],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
