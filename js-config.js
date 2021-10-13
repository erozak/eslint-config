'use-strict';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
    /**
    * @see {@link http://eslint.org/docs/rules/}
    **/
   rules: {

    /**
    * Possible Problems
    */

    // 'array-callback-return': 'off',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    // 'no-await-in-loop': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    // 'no-constructor-return': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    // 'no-promise-executor-return': 'off',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    // 'no-self-compare': 'off',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    // 'no-template-curly-in-string': 'off',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    // 'no-unmodified-loop-condition': 'off',
    'no-unreachable': 'error',
    // 'no-unreachable-loop': 'off',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        // classes: true,
        // variables: true,
      }
    ],
    'no-useless-backreference': 'error',
    // 'require-atomic-updates': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    /**
     * Suggestions
     */

    'accessor-pairs': [
      'error',
      {
        // setWithoutGet: false,
        getWithoutSet: true,
      }
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
      {
      // requireReturnForObjectLiteral: false,
      },
    ],
    //  'block-scoped-var': 'off',
    'camelcase': [
      'error',
      {
        // properties: 'always',
        // ignoreDestructuring: false,
        // ignoreImports: false,
        ignoreGlobals: true,
        // allow: [],
      }
    ],
    //  'capitalized-comments': 'off',
    //  'class-methods-use-this': 'off',
    //  'complexity': 'off',
    //  'consistent-return': 'off',
    //  'consistent-this': 'off',
    'curly': [
      'error',
      'multi-line',
    ],
    'default-case': 'error',
    'default-case-last': 'error',
    //  'default-param-last': 'off',
    'dot-notation': [
      'error',
      {
        allowKeywords: false,
      //  allowPattern: '',
      }
    ],
    'eqeqeq': [
      'error',
      'always',
      {
      null: 'ignore'
      }
    ],
    //  'func-name-matching': 'off',
    //  'func-names': 'off',
    //  'func-style': 'off',
    //  'grouped-accessor-pairs': 'off',
    //  'guard-for-in': 'off',
    //  'id-denylist': 'off',
    //  'id-length': 'off',
    //  'id-match': 'off',
    //  'init-declarations': 'off',
    //  'max-classes-per-file': 'off',
    //  'max-depth': 'off',
    //  'max-lines': 'off',
    //  'max-lines-per-function': 'off',
    //  'max-nested-callbacks': 'off',
    //  'max-params': 'off',
    //  'max-statements': 'off',
    //  'multiline-comment-style': 'off',
    //  'new-cap': 'off',
    //  'no-alert': 'off',
    //  'no-array-constructor': 'off',
    //  'no-bitwise': 'off',
    //  'no-caller': 'off',
    'no-case-declarations': 'error',
    //  'no-confusing-arrow': 'off',
    'no-console': 'error',
    //  'no-continue': 'off',
    'no-delete-var': 'error',
    //  'no-div-regex': 'off',
    //  'no-else-return': 'off',
    'no-empty': 'error',
    //  'no-empty-function': 'off',
    //  'no-eq-null': 'off',
    'no-eval': 'error',
    //  'no-extend-native': 'off',
    //  'no-extra-bind': 'off',
    'no-extra-boolean-cast': 'error',
    //  'no-extra-label': 'off',
    'no-extra-semi': 'error',
    //  'no-floating-decimal': 'off',
    'no-global-assign': 'error',
    //  'no-implicit-coercion': 'off',
    //  'no-implicit-globals': 'off',
    //  'no-implied-eval': 'off',
    //  'no-inline-comments': 'off',
    //  'no-invalid-this': 'off',
    'no-iterator': 'error',
    //  'no-label-var': 'off',
    //  'no-labels': 'off',
    //  'no-lone-blocks': 'off',
    //  'no-lonely-if': 'off',
    //  'no-loop-func': 'off',
    //  'no-magic-numbers': 'error',
    //  'no-mixed-operators': 'off',
    //  'no-multi-assign': 'off',
    'no-multi-str': 'error',
    //  'no-negated-condition': 'off',
    //  'no-nested-ternary': 'off',
    //  'no-new': 'off',
    'no-new-func': 'error',
    //  'no-new-object': 'off',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    // 'no-octal-escape': 'off',
    'no-param-reassign': 'error',
    // 'no-plusplus': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    //  'no-restricted-exports': 'off',
    //  'no-restricted-globals': 'off',
    //  'no-restricted-imports': 'off',
    //  'no-restricted-properties': 'off',
    //  'no-restricted-syntax': 'off',
    //  'no-return-assign': 'off',
     'no-return-await': 'error',
    //  'no-script-url': 'off',
     'no-sequences': 'error',
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        // hoist: 'functions',
        // allow: [],
      }
    ],
    'no-shadow-restricted-names': 'error',
    // 'no-ternary': 'off',
    // 'no-throw-literal': 'off',
    // 'no-undef-init': 'off',
    // 'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      // allowTernary: false,
      allowTaggedTemplates: true,
      // enforceForJSX: false,
    }],
    'no-unused-labels': 'error',
    // 'no-useless-call': 'off',
    'no-useless-catch': 'error',
    // 'no-useless-computed-key': 'off',
    // 'no-useless-concat': 'off',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    // 'no-warning-comments': 'off',
    'no-with': 'error',
    'one-var': [
      'error',
      'consecutive'
    ],
    // 'object-shorthand': 'off',
    // 'one-var-declaration-per-line': 'off',
    // 'operator-assignment': 'off',
    'prefer-arrow-callback': [
      'error',
      {
        // allowNamedFunctions: false,
        // allowUnboundThis: true,
      }
    ],
    'prefer-const': 'error',
    // 'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'error',
    // 'prefer-named-capture-group': 'off',
    // 'prefer-numeric-literals': 'off',
    // 'prefer-object-spread': 'off',
    // 'prefer-promise-reject-errors': 'off',
    // 'prefer-regex-literals': 'off',
    // 'prefer-rest-params': 'off',
    // 'prefer-spread': 'off',
    // 'prefer-template': 'off',
    // 'quote-props': 'off',
    // 'radix': 'off'
    // 'require-await': 'off',
    // 'require-unicode-regexp': 'off',
    'require-yield': 'error',
    // 'sort-imports': 'off',
    // 'sort-keys': 'off',
    // 'sort-vars': 'off',
    // 'spaced-comment': 'off',
    // 'strict': 'off',
    'symbol-description': 'warn',
    // 'vars-on-top': 'off',
    // 'yoda': 'off',

    /**
     * Layout & Formatting
     */

    'array-bracket-newline': [
      'error',
      'consistent',
      {
        // multiline: true,
        minItems: 3,
      }
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        // minItems: null,
      }
    ],
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: false,
      }
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      }
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      'stroustrup',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'error',
      'last',
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'dot-location': [
      'error',
      'property',
    ],
    'eol-last': [
      'off',
      'always',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'generator-star-spacing': [
      'error',
      'after',
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: 1,
        FunctionExpression: {
          parameters: 'first',
        },
        CallExpression: {
          arguments: 'first'
        },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        ImportDeclaration: 'first',
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false,
      }
    ],
    'jsx-quotes': 'prefer-double',
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
        },
        multiLine: {
          beforeColon: false,
          afterColon: true,
        },
        align: {
          "beforeColon": false,
          "afterColon": true,
          "on": "value"
      }
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // 'line-comment-position': 'off',
    'linebreak-style': [
      'error',
      'unix',
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        // afterBlockComment: false,
        // beforeLineComment: false,
        // afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
      }
    ],
    'lines-between-class-members': [
      'off',
      'always',
      {
        exceptAfterSingleLine: true,
      }
    ],
    'max-len': [
      'error',
      {
        code: 92,
        tabWidth: 2,
        // comments: 92,
        // ignorePattern: '',
        ignoreComments: true,
        ignoreTrailingComments: true,
        // ignoreUrls: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }
    ],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'multiline-ternary': [
      'error',
      'always-multiline',
    ],
    'new-parens': [
      'error',
      'always',
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 1,
      }
    ],
    'no-extra-parens': [
      'error',
      'all',
      {
        // conditionalAssign: true,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'multi-line',
        // enforceForArrowConditionals: true,
        // enforceForSequenceExpressions: true,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false,
      },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: false,
          ImportDeclaration: false,
        }
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 1,
      },
    ],
    // 'no-tabs': 'off',
    'no-trailing-spaces': [
      'error',
      {
        // skipBlankLines: false,
        // ignoreComments: false,
      }
    ],
    'no-whitespace-before-property': [
      'error',
    ],
    // 'nonblock-statement-body-position': 'off',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: true,
      }
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      }
    ],
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '&&': 'after',
          '||': 'after',
        }
      }
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    // 'padding-line-between-statements': 'off',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }
    ],
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    'semi': [
      'error',
      'always',
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      }
    ],
    'semi-style': [
      'error',
      'last',
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nowords: false,
      }
    ],
    'switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true,
      }
    ],
    'template-curly-spacing': [
      'error',
      'never',
    ],
    'template-tag-spacing': [
      'error',
      'never',
    ],
    'unicode-bom': [
      'error',
      'never',
    ],
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true,
      }
    ],
    'wrap-regex': 'off',
    'yield-star-spacing': [
      'error',
      'after',
    ],
   },
};

module.exports = config;
