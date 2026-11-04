import authressConfig from '@authress/eslint-config';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  ...authressConfig,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        AWS: 'readonly',
      },
    },
    rules: {
      'arrow-parens': ['error', 'as-needed'],
      'curly': ['error', 'all'],
      'indent': ['error', 2, { SwitchCase: 1, MemberExpression: 'off' }],
      'max-len': 'off',
      'no-console': 'error',
      'prefer-const': ['error'],
      'n/no-unsupported-features/es-syntax': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-missing-import': ['error', { tryExtensions: ['.js', '.json', '.vue', '.css'] }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/order-in-components': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/attributes-order': 'off',
      'vue/html-indent': 'off',
      'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'never' }],
      'vue/attribute-hyphenation': 'off',
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      // Pages run in the browser, where navigator is standard; the node plugin only knows Node's experimental global.
      'n/no-unsupported-features/node-builtins': 'off',
    },
  },
  {
    files: ['make.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
];
