import { all } from './lint-configs/eslint/eslint.config.mjs';
import { es5 } from './lint-configs/eslint/es5.config.mjs';


export default [
    ...all,
    {
        files: [
            '*.config.js',
            'client/**/*.{js,ts,jsx,tsx}',
        ],
    }, {
        files: [
            'client/**/*.ts',
        ],
        languageOptions: {
            parserOptions: {
                project: 'client/tsconfig.json',
            },
        },
        rules: {
            '@typescript-eslint/comma-dangle': [
                'error',
                'never',
            ],
        },
    }, {
        files: [
            'client/**/*.tsx',
        ],
        languageOptions: {
            parserOptions: {
                project: 'client/tsconfig.json',
            },
        },
    }, {
        files: ['client/**/*.js'],
        ignores: ['client/**/*.router.js'],
        ...es5,
    }, {
        ignores: [ '*.config.js' ],
        // rules: {
        //     'no-console': 2,
        //     'comma-dangle': [
        //         'error',
        //         'never',
        //     ],
        // },
    },
];
