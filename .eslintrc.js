module.exports = {
  root: true,
  extends: ['prettier', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': [0],
    curly: ['error', 'multi-line'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'comma-dangle': ['error', 'never'],
    'no-shadow': [0],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': 'warn'
    // 'react-native/no-inline-styles': 1,
    // 'react-native/no-color-literals': 1,
    // 'react-native/no-single-element-style-arrays': 1,
    // 'react-native/no-unused-styles': 1,
    // 'react/self-closing-comp': ['error'],
    // 'react/jsx-closing-bracket-location': 2, // -> [<enabled>, "tag-aligned"],
    // 'react/jsx-indent-props': [2, 2]
  }
}
