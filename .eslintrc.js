module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'no-param-reassign': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'no-console': 1,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-array-index-key': 0,
    'no-constant-condition': 0,
  },
};
