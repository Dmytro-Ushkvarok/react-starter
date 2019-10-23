const merge = require('webpack-merge');
const { base } = require('./webpack.base');
const { entry, images } = require('./webpack');

module.exports = merge(base, {
  entry,
  module: {
    rules: [images({ optimize: false })]
  },
  mode: 'development',
  devtool: 'eval-source-map'
});
