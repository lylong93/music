// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        'no-console': [0],
        'func-names': [0],
        'arrow-body-style': [0],
        'no-unused-expressions': [0],
        'no-else-return': [0],
        'prefer-template': [0],
        'no-restricted-syntax': [0],
        'no-useless-return': [0],
        'linebreak-style': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'consistent-return': 0,
    }
}