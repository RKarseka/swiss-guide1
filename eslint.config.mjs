// @ts-check

import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import pluginReact from 'eslint-plugin-react';
import pluginReactCompiler from 'eslint-plugin-react-compiler';

import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  pluginPrettierRecommended,

  ...ts.configs.recommended,
  ...ts.configs.stylistic,

  {
    name: 'eslint-plugin-react/recommended',
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
    },
  },

  {
    plugins: {
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.flatConfigs.recommended.rules,
      'react-hooks/exhaustive-deps': 'off',
    },
  },

  {
    name: 'react-compiler/recommended',
    plugins: {
      'react-compiler': pluginReactCompiler,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },

  {
    ignores: ['./dist', './node_modules'],
    files: ['**/*'],
    settings: {
      react: { version: 'detect' },
      componentWrapperFunctions: ['observer', 'styled'],
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
  },

  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 85,
          endOfLine: 'auto',
          jsxSingleQuote: true,
          bracketSameLine: false,
        },
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
];
