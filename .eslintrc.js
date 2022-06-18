module.exports = {
  "rules": {
    "@typescript-eslint/no-use-before-define": [
      "off"
    ],
    "import/prefer-default-export": "off",
    "semi": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "no-shadow": [
      "off"
    ],
    "@typescript-eslint/no-floating-promises": ["warn"],
    "no-underscore-dangle": [2, { "allowAfterThis": true }],
    "max-len": ["error", 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "prefer-destructuring": ["error", {
        "array": false,
        "object": true
      }, {
        "enforceForRenamedProperties": false
      }],
       "consistent-return": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            { "selector": "default", "format": ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"], "leadingUnderscore": "allow" },
            { "selector": "variableLike", "format": ["camelCase", "UPPER_CASE", "PascalCase"], "leadingUnderscore": "allow" },
            { "selector" :"typeLike", "format": ["camelCase", "PascalCase"] }
        ],
        "@typescript-eslint/camelcase": 0,
  },
  "ignorePatterns": [
    "**/*.js"
  ],
};