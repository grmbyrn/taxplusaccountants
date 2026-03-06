import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // Migrate ignore patterns from .eslintignore (newer ESLint expects `ignores` here)
    ignores: [
      ".next",
      "node_modules",
      "dist",
      "coverage",
      "public",
      ".vscode",
      "*.log",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
