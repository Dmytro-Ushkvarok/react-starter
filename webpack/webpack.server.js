const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const merge = require('webpack-merge');
const dev = require('./webpack.dev');
const { root, enviroment } = require('./webpack.js');

/**
 * Envs
 */
const { port } = enviroment();

/**
 * Webpack dev server configuration
 */
module.exports = merge(dev, {
  watch: true,
  entry: [`webpack-dev-server/client?http://localhost:${port}`],
  devServer: {
    inline: true,
    quiet: true,
    hot: true,
    historyApiFallback: true,
    host: 'localhost',
    port,
    contentBase: root('dist'),
    publicPath: '/'
  },
  plugins: [new NamedModulesPlugin(), new HotModuleReplacementPlugin()]
});
