const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  context: __dirname,
  entry: './src/bin/server.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          presets: [
            ['env', {
              targets: {
                node: 'current',
              }
            }]
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
  ],
  externals: [nodeExternals()],
};
