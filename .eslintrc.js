/* eslint-disable no-undef */
module.exports = {
  extends: [
    'airbnb-typescript',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers', 'eslint-plugin-react-native', 'react-native', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    project: 'tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: true,
  },
  env: {
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [0],
    "import/no-extraneous-dependencies": [0, {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}],
    'import/extensions': [
      0,
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'no-console': "warn",
    'camelcase': 'off',
    'react/no-array-index-key': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    'import/prefer-default-export': ['off'],
    'react/prop-types': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-underscore-dangle': 'off',
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 1,
    'react-native/no-single-element-style-arrays': 1,
    'react-native/no-unused-styles': 1,
    'react/self-closing-comp': ['error'],
    "react/jsx-closing-bracket-location": 2, // -> [<enabled>, "tag-aligned"],
    "react/jsx-indent-props": [2, 2],
    // '@typescript-eslint/no-loop-func': 'off',
    // '@typescript-eslint/no-redeclare': 'off',
    // '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
  },
  globals: {
    fetch: false,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', 'node_modules/@types'],
        paths: ['./src'],
      },
    },
    'babel-plugin-root-import': {
      rootPathSuffix: 'src',
    },
  },
};
