module.exports = {
  extends: ["airbnb", "eslint-config-prettier"],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  
  plugins: ["prettier", "jest"],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  rules: {
    "prettier/prettier": "warn",
    "prettier/allowParens": "off",
    sourceType: 0,
    "no-restricted-syntax": ["off"],
    "react/destructuring-assignment": ["off"],
    "react/jsx-filename-extension": ["off"],
    radix: "off",
  },
  ignorePatterns: ["node_modules/", "dist/", "*.config.js"],
};
