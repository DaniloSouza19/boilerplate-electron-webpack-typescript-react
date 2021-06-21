/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env'),
});

module.exports = [
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
