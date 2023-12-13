import {
    // pathsToModuleNameMapper,

    type JestConfigWithTsJest,
} from 'ts-jest';

// import { compilerOptions } from './client/tsconfig.json';


const config: JestConfigWithTsJest = {
    // rootDir: './',
    roots: ['<rootDir>/client'],

    preset: 'ts-jest',
    // preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',

    // modulePaths: [compilerOptions.baseUrl],
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),

    // modulePaths: ['<rootDir>'],
    moduleDirectories: [
        // custom-ui ← eo ← sources ← root /
        '<rootDir>/../../../node_modules',
        '<rootDir>/../../../sources/eo/custom-ui/client',
        '<rootDir>/../../../sources/saby/types',
        '<rootDir>/../../../sources/sbis/rmi/src',
        // '<rootDir>/../../../builds/online/build-ui/resources',
    ],

    moduleNameMapper: {
        '^i18n!.+': '<rootDir>/../../../node_modules/identity-obj-proxy',
        '^css!.+': '<rootDir>/../../../node_modules/identity-obj-proxy',
    },

    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/client/tsconfig.json',
                isolatedModules: true,
                module: 'amd',
            },
        ],
    },
};


export {
    config
};
