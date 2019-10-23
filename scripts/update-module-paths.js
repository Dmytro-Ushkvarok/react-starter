const fs = require('fs');
const config = require('../tsconfig.json');
const prettier = require('prettier');

if (!config.compilerOptions.paths) config.compilerOptions.paths = {};

/**
 * Root module path
 */
const base = './src';

/**
 * Modules for caching
 */
let cache = require('../cache/previous-module-paths.json');

/**
 * Clear old module paths
 */
const clear = () => {
  Object.keys(cache).map(key => {
    delete config.compilerOptions.paths[key];
  });

  cache = {};
};

/**
 * Recursevly register modules without unneeded /modules path chaining
 */
const writePaths = (path = []) => {
  const depth =
    base + (path.length ? '/modules/' + path.join('/modules/') : '');
  const dirs = fs.readdirSync(depth);

  if (dirs.includes('modules')) {
    fs.readdirSync(depth + '/modules').map(item => {
      writePaths(path.concat(item));
    });
  }

  if (path.length) {
    const root = depth
      .replace(base + '/modules/', '@')
      .replace(/\/modules/gi, '');
    const content = fs.readdirSync(depth);

    config.compilerOptions.paths[root + '/*'] = cache[root + '/*'] = [
      depth + '/*'
    ];

    if (content.includes('index.ts') || content.includes('index.tsx')) {
      config.compilerOptions.paths[root] = cache[root] = [depth + '/index'];
    }
  }
};

clear();
writePaths();

/**
 * Rewrite files
 */
fs.writeFileSync(
  './cache/previous-module-paths.json',
  prettier.format(JSON.stringify(cache), {
    parser: 'json'
  })
);
fs.writeFileSync(
  './tsconfig.json',
  prettier.format(JSON.stringify(config), {
    parser: 'json'
  })
);
