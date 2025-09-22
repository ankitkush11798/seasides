import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      // React specific rules
      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'warn',
      'react/jsx-pascal-case': 'error',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // General JavaScript rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'error',
      'no-unreachable': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-template-curly-in-string': 'error',
      'no-irregular-whitespace': 'error',
      semi: ['error', 'always'],
      curly: ['error', 'all'],
      'eol-last': 'warn',
      'no-mixed-spaces-and-tabs': 'error',
      'no-trailing-spaces': 'warn',

      // Next.js specific
      '@next/next/no-img-element': 'off'
    }
  },
  {
    files: ['components/unused/**/*'],
    rules: {
      'jsx-a11y/label-has-associated-control': 'off',
      'no-console': 'off'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'build/**',
      'dist/**',
      'public/**',
      '*.lock',
      'package-lock.json',
      'yarn.lock',
      '.git/**',
      '.vercel/**',
      '__tests__/**',
      '*.config.js',
      '*.config.mjs'
    ]
  }
];

export default eslintConfig;
