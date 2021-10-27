const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // TODO: Remove 'static.ghost.org' after getting rid of the mockup content
    domains: ['admin.vladg.dev', 'images.unsplash.com', 'static.ghost.org'],
  },
  webpack: (config) => {
    config.plugins.push(
      new ESLintPlugin({
        exclude: ['.next', 'node_modules'],
        fix: true,
      }),
      new StylelintPlugin({
        configFile: '.stylelintrc',
        files: 'src/**/*.(css|s(a|c)ss)',
        fix: true,
      })
    );

    return config;
  },
};
