import js from '@eslint/js'
import vue from 'eslint-plugin-vue'

export default [
  ...vue.configs['flat/recommended'],
  js.configs.recommended,
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true
      }
    },
    plugins: {
      vue
    },
    rules: {}
  }
]
