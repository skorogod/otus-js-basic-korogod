module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier", "eslint-config-prettier"],
  plugins: ["prettier", "jest"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-useless-escape": "off",
    "no-console": "off",
    "no-alert": "off",
  },
};

// [
//   "error", {
//     ignoreComments: true,
//   }
// ],
