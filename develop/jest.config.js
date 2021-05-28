// https://github.com/ahnpnl/react-ts-jest-babel

module.exports = {
    globals: {
        VERSION: 'AMAZING_VERSION',
        API_ROOT: 'API_ROOT',
    },
    transform: {
        '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
        '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/jest/fileTransform.js',
    },
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/index.tsx',
        '!src/**/index.ts',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    testEnvironment: 'jest-environment-jsdom-fourteen',
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    modulePaths: [],
    moduleNameMapper: {
        '^assets/(.*)$': '<rootDir>/src/assets/$1',
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^constants/(.*)$': '<rootDir>/src/constants/$1',
        '^helpers$': '<rootDir>/src/helpers/index.ts',
        '^pages/(.*)$': '<rootDir>/src/pages/$1',
        '^services$': '<rootDir>/src/services/index.ts',
        '^stores/(.*)$': '<rootDir>/src/stores/$1',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
        'node',
    ],
};
