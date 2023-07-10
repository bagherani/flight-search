module.exports = {
  ignorePatterns: ['node_modules', 'build', '*.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'eslint-plugin-tsdoc', 'prettier'],
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  settings: {
  },
  rules: {
    "prettier/prettier": "error",
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_$' }],
    '@typescript-eslint/no-var-requires': 0,
    'no-case-declarations': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    curly: 'error',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1,
    'no-prototype-builtins': 0,
    'import/order': [
      1,
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: 'models/**',
            group: 'internal',
          },
          {
            pattern: 'ai/**',
            group: 'internal',
          },
          {
            pattern: 'store/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      // requires line break after multiline variables
      {
        blankLine: 'always',
        prev: ['multiline-const', 'multiline-let'],
        next: '*',
      },
      // requires line break after block statements
      {
        blankLine: 'always',
        prev: ['block', 'block-like'],
        next: '*',
      },
      // requires line break before block statements
      {
        blankLine: 'always',
        prev: '*',
        next: ['block', 'block-like'],
      },
      // requires line break before return statement
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'tsdoc/syntax': 'error',
  },
};