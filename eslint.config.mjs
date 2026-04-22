import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  // 1. 기본 추천 설정 및 Next.js 설정
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,

  // 2. 검사 제외 대상
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "dist/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      prettier,
    },
    rules: {
      // 3. 함수 선언식 스타일 강제 (가장 중요!)
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "function-expression",
        },
      ],

      // 4. Prettier 충돌 방지 및 통합
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],

      // 5. TypeScript 관련 핵심 규칙
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // 6. 기타 유용한 핵심 규칙
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "react/jsx-no-useless-fragment": "warn",
    },
  },
]);

export default eslintConfig;
