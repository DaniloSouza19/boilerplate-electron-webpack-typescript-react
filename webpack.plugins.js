/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = [
  new DotEnv({
    systemvars: true,
  }),
  new ForkTsCheckerWebpackPlugin(),
  new CopyPlugin({
    patterns: [
      {
        // Copy the binary Oracle DB driver to dist.
        from: path.resolve(__dirname, 'node_modules/oracledb/build'),
        to: path.resolve(__dirname, '.webpack/renderer/build'),
      },
    ],
  }),
];
