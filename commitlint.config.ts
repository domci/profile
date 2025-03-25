export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-trim': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'ci',
        'build'
      ]
    ]
  }
}; 