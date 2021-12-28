module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tscofing.json',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
};
