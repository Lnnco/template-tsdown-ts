import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig(
  [
    globalIgnores(['dist']),
    {
      files: ['**/*.{ts,tsx,mts}'],
      extends: [
        js.configs.recommended,
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
        prettierConfig,
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
      rules: {
        '@typescript-eslint/prefer-literal-enum-member': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        'no-fallthrough': 'warn',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
  eslintPluginPrettierRecommended,
)
