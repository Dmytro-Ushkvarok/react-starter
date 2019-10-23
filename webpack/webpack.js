const path = require('path');
const merge = require('deepmerge');
/**
 * Get path from root dir
 */
const root = pathname => path.join(__dirname, '../' + pathname);

/**
 * App Entries
 */
const entry = [root('src/vendor.ts'), root('src/index.tsx')];

/**
 * Use loader
 */
const use = (loader, options = {}) => ({
  loader,
  options
});

/**
 * Is production env
 */
const production = process.env.NODE_ENV === 'production';

/**
 * Get enviroment
 */
const enviroment = (name = 'test') =>
  merge(require(`../config/${name}.json`), require('../config/local.json'));

/**
 * Loader for image files
 */
const images = ({ optimize = true } = {}) => ({
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    use('file-loader', {
      name: 'img/[name].[ext]'
    }),
    use(
      'image-webpack-loader',
      optimize
        ? {
            pngquant: {
              quality: '90',
              speed: 4
            },
            mozjpeg: {
              progressive: true,
              quality: 70
            },
            svgo: {}
          }
        : {}
    )
  ]
});

module.exports = { root, entry, images, use, production, enviroment };
