module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // Switch between Babel or Typescript
    parser: "babel-eslint"
  },
  extends: [
    "eslint:recommended", // Switch this one to typescript if needed
    "prettier/vue",
    "plugin:vue/recommended", // Can switch to basic or strongly recommended
    "plugin:prettier/recommended",
  ],
  // required to lint *.vue files
  plugins: ["vue", "prettier"],
  // add your custom rules here
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { semi: false }],
    "vue/require-default-prop": "off",
    "vue/no-v-html": "off",
    "no-shadow": "off"
  }
}
