const { DefinePlugin, optimize, ContextReplacementPlugin } = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { root, use, production, enviroment } = require('./webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * Plugins
 */
const { OccurrenceOrderPlugin } = optimize;
/**
 * Get styles rule
 */
const styles = (global = true) => {
  const rule = {
    test: /(\.css|\.scss)/,
    exclude: [/node_modules/],
    use: [
      use(MiniCssExtractPlugin.loader, {
        minimize: production,
        hmr: !production
      }),
      use(
        'css-loader',
        global
          ? {}
          : {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              },
              localsConvention: 'camelCaseOnly'
            }
      ),
      'postcss-loader',
      'sass-loader'
    ]
  };

  if (global) {
    rule.include = [/(global\..*)$/];
  } else {
    rule.exclude.push(/(global\..*)$/);
  }

  return rule;
};

/**
 * Base configuration
 */
const base = {
  output: {
    path: root('dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      '@assets': root('src/assets')
    },
    modules: ['node_modules'],
    extensions: [
      '.ts',
      '.css',
      '.scss',
      '.tsx',
      '.js',
      '.json',
      '.png',
      '.svg',
      '.jpg',
      '.*'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          use('ts-loader', {
            // transpileOnly: true
          })
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|otf|eot|ico|ttf)(\?[a-z0-9=.]+)?$/,
        use: [
          use('file-loader', {
            name: 'fonts/[name].[ext]'
          })
        ]
      },
      styles(),
      styles(false)
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: root('src/public/index.html'),
      filename: 'index.html',
      inject: true
      // minify: production
    }),
    // TODO: nail cmd argument here
    new DefinePlugin(enviroment()),
    new ContextReplacementPlugin(/moment[\/\\]locale$/, /ru|en/),
    new OccurrenceOrderPlugin(true),
    new FriendlyErrorsWebpackPlugin(),
    // new ForkTsCheckerWebpackPlugin(),
    // new ForkTsCheckerNotifierWebpackPlugin({
    //   title: 'TypeScript',
    //   silent: false,
    //   async: false
    // }),
    new SimpleProgressPlugin({
      progressOptions: {
        clear: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      allowAsyncCycles: false
    })
  ]
};

module.exports = { base };
