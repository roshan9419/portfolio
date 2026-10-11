import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import solid from 'eslint-plugin-solid/configs/typescript'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended, solid],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
})
