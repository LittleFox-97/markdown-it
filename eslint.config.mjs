import antfu from '@antfu/eslint-config'
import markdownPreferences from 'eslint-plugin-markdown-preferences'
import sonarjs from 'eslint-plugin-sonarjs'

export default antfu({
  ignores: ['node_modules/**.*'],
  stylistic: true,
  typescript: false,
  type: 'lib',
  jsonc: true,
  vue: false,
  astro: false,
  yaml: true,
  unicorn: true,
}, sonarjs.configs.recommended, markdownPreferences.configs.standard, {
  rules: {
    'no-throw-literal': 'warn',
    'no-console': 'warn',
    'curly': ['error', 'all'],
    'style/brace-style': ['error', '1tbs'],
    'complexity': ['warn', 8],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
  },
})
