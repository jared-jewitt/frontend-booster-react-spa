module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['jest', 'react'],
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'plugin:react/recommended'],
  rules: {
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'no-unused-vars': 'warn',
    'no-case-declarations': 'off',
    'react/prop-types': 'warn',
    'react/no-deprecated': 'warn',
    'react/display-name': 'off',
  },
};
