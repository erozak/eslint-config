'use-strict';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    /**
     * Off js rules
     */
    'brace-style': 'off',
    'comma-dangle': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-loss-of-precision': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'require-jsdoc': 'off',
    indent: 'off',

    /**
     * typescript rules
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/brace-style': [
      'error',
      'stroustrup',
      {
        allowSingleLine: true,
      },
    ],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        enums: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        generics: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 'first',
        },
        FunctionExpression: {
          parameters: 'first',
          body: 1,
        },
        CallExpression: {
          arguments: 'first',
        },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        ImportDeclaration: 'first',
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSTypeParameterInstantiation',
          'TSFunctionType > *',
        ],
      },
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterOverload: false,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        multilineDetection: 'brackets',
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ignoreTypeReferences: true,
        functions: false,
        classes: true,
        variables: true,
        enums: true,
      },
    ],
    '@typescript-eslint/no-extra-parens': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-shadow': 'error',
  },
};

module.exports = config;
