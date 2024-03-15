module.exports = {
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended", // Застосовує Prettier як ESLint правило
    "eslint-config-prettier"
  ],
  plugins: [
    'vue',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', {
      'endOfLine': 'auto',
    }],
    'vue/max-len': [
      'error',
      {
        code: 180,
        template: 180,
        tabWidth: 2,
        comments: 180,
        ignorePattern: '',
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false,
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never',
          void: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-v-html': 'off',
    'operator-linebreak': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-shadow': ['error', { 'allow': ['state'] }], // Дозволяє використання 'state' у Vuex
    'comma-dangle': ['error', 'always-multiline'],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
  },
};
