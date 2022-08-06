module.exports = {
  extends: ["airbnb", "eslint-config-prettier"],
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
    // why? just why is this even a thing? to make Js code look cool?
    "react/destructuring-assignment": ["off"],
    "react/jsx-filename-extension": ["off"],
    radix: "off",
  },
  ignorePatterns: ["node_modules/", "dist/", "*.config.js"],
};
