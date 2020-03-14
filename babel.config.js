module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime','babel-plugin-styled-components'],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
};
