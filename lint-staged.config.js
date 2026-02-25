/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '!(*.ts|*.tsx|*.mts)': 'prettier --write --ignore-unknown',
  '*.{ts,tsx,mts}': ['prettier --write --ignore-unknown', 'eslint --color'],
}
