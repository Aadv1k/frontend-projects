module.exports = {
  extends: ["../../../config/.eslintrc.js"],
  env: {
    "jest/globals": true,
    commonjs: true,
    node: true,
    browser: true,
  },
  rules: {
    "jest/no-disabled-tests": "off",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
};
