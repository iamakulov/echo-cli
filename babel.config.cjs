module.exports = function configureBabel(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '14.17.0',
        },
        modules: false, // this means don't transform imports/exports
      },
    ],
   ['@babel/preset-typescript',],
  ];
  const plugins = [
    ['babel-plugin-add-import-extension', { extension: 'mjs', replace: true }],
  ];
  return { presets, plugins };
};
