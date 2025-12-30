import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: {
        ...globals.node, // Changed from browser to node for backend
        ...globals.es2021,
      },
    },
    rules: {
      'no-undef': 'error', // Check for undefined variables
      'no-unused-vars': 'warn', // Warn about unused variables
      'no-console': 'off', // Allow console.log in backend
    },
  },
  ...tseslint.configs.recommended,
]);
