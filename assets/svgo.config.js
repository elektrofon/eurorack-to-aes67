module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          inlineStyles: false,
        },
      },
    },

    // enable builtin plugin not included in default preset
    'prefixIds',
  ],
};
