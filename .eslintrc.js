module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-useless-fragment': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    'no-alert': 0,
  },
  settings: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
