module.exports = {
  extends: [require.resolve('./eslint-preset.js')],
  parserOptions: {
    sourceType: 'module',
    project: null,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
