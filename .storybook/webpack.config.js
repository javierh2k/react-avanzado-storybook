const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.js?$/,
    include: path.resolve(__dirname, '../../stories'),
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: './node_modules/.cache/storybook',
          presets: [
            [ './node_modules/@babel/preset-env/lib/index.js',
              {
                shippedProposals: true, useBuiltIns: 'usage', corejs: '3'
              }
            ],
            './node_modules/@babel/preset-react/lib/index.js',
            './node_modules/@babel/preset-flow/lib/index.js',
          ],
          plugins: [],
        },
      },
    ],
  });

  config.resolve.modules = [
    ...config.resolve.modules,
    path.resolve(process.cwd(), 'node_modules'),
  ]

  // Return the altered config
  return config;
};