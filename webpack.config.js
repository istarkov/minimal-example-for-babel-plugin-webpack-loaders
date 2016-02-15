// webpack.config.js css-modules loader example
var path = require('path');

module.exports = {
  output: {
    // YOU NEED TO SET libraryTarget: 'commonjs2'
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
};
