module.exports = function configureBabel(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '14.17.0',
        },
        modules: 'cjs',
      },
    ],
    ['@babel/preset-typescript'],
  ];
  const plugins = [
    ['babel-plugin-add-import-extension', { extension: 'cjs', replace: true }],
  ];
  return { presets, plugins };
};