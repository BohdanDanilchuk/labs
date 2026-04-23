import js from "@eslint/js";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
      "cypress/**",
      "cypress.config.js",
      "cypress.config.cjs",
      "js/**",
      "style/**",
      "meta/**"
    ]
  },
  js.configs.recommended,
  {
    files: ["src/**/*.js", "index.html"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        navigator: "readonly",
        requestAnimationFrame: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];