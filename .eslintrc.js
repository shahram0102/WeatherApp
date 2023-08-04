module.exports = {
  root: true,
  extends: '@callstack',
  rules: {
    'react-native/no-raw-text': 0,
    'promise/prefer-await-to-then': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['assets', './assets'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
