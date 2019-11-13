const { images, entry, root } = require('./webpack');
const { base } = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

/**
 * Prod configuration
 */
module.exports = merge(base, {
  mode: 'production',
  entry,
  module: {
    rules: [images()]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    },
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [root('dist')]
    }),
    new Visualizer({
      filename: root('report/stats.html')
    })
  ]
});
