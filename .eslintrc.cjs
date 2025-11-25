module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: { react: { version: 'detect' } },
  rules: {
    // правила
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'prefer-const': 'error',
    quotes: ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-single'],
    indent: ['warn', 4, { SwitchCase: 1 }],
    'max-len': ['warn', { code: 250 }],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['warn', 'never'],

    // интеграция с Prettier — Prettier управляет форматированием
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        endOfLine: 'lf',
      },
    ],

    // дополнительные полезные правила
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // отключаем базовый no-unused-vars в пользу @typescript-eslint/no-unused-vars
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

        // отключаем базовые indent для TypeScript, если используем @typescript-eslint/indent
        indent: 'off',
        '@typescript-eslint/indent': ['warn', 4],
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
