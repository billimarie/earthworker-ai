// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  pluginJs.configs.recommended,
  {
    // Configuration for your actual source code files
    files: ["**/*.ts", "**/*.js"], // Apply to all .ts and .js files
    ignores: ["eslint.config.mjs"], // <<-- ADD THIS LINE: EXCLUDE THE CONFIG FILE
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"], // Your tsconfig for type-aware linting
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        ...globals.node, // For Node.js environment (Firebase Functions)
      },
    },
    // Use type-aware rules here, applied only to files defined by 'files'
    extends: [
      ...tseslint.configs.recommendedTypeChecked, // Apply type-aware recommended rules
      // Add any other specific type-aware rules or configurations here
    ],
    rules: {
      // Your custom rules here
      // For instance, if you want to turn off 'await-thenable' or customize it:
      // '@typescript-eslint/await-thenable': 'off',
    },
  },
  {
    // Optional: Basic configuration for plain JavaScript files that don't need type checking
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked], // Ensure no type-aware rules are applied here
    // You might still want some basic JS linting without type-checking
    rules: {
        // Example: 'no-unused-vars': 'warn',
    }
  }
  // If you also lint test files (e.g., .spec.ts), define a separate config for them
  // {
  //   files: ["**/*.test.ts"],
  //   languageOptions: {
  //     globals: globals.jest, // If you use Jest
  //     // Other parserOptions as above
  //   },
  //   extends: [
  //     ...tseslint.configs.recommendedTypeChecked,
  //     // Add testing specific rules here
  //   ],
  // },
);