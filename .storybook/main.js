module.exports = {
  presets: [{
    name: 'storybook-addon-deps/preset',
    options: {
      exclude: /^@babel/
    }
  }],
  stories: ['../src/**/*.stories.js'],
  addons: [
    "@storybook/preset-create-react-app",
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ]
};

// const path = require('path');
// var projectRoot = path.resolve(__dirname, '../')
// // const configUser = require('../config')
// // Export a function. Accept the base config as the only param.
// module.exports = {
//   presets: [{
//     name: 'storybook-addon-deps/preset',
//     options: {
//       exclude: /^@babel/
//     }
//   }],
//   stories: [ '../src/**/*.stories.js'],
//   addons: [
//     '@storybook/addon-essentials',
//     '@storybook/addon-docs',
//     '@storybook/addon-actions',
//     '@storybook/addon-storysource',
//     '@storybook/addon-a11y',
//   ],
//   webpackFinal: async (config, { configType }) => {
//     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//     // You can change the configuration based on that.
//     // 'PRODUCTION' is used when building the static version of storybook.
     
//     // Return the altered config
//     return config;
//   },
// };



