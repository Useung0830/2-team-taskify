import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import importXPlugin from "eslint-plugin-import-x";

const eslintConfig = defineConfig([
  // 기본 추천 설정 및 Next.js 설정
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,

  // 검사 제외 대상
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
      prettier: prettierPlugin,
      "import-x": importXPlugin,
    },
    rules: {
      // 함수 선언 관련 정의
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration", // 외부 컴포넌트 함수 선언식 사용
          unnamedComponents: "arrow-function", // 내부 컴포넌트는 화살표 함수 사용
        },
      ],

      // Import rules
      // 성능 최적화를 위해 import-x 라이브러리 사용
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "import-x/prefer-default-export": "off",
      "import-x/no-unresolved": "off",
      "import-x/no-default-export": "error",
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Prettier 통합
      "prettier/prettier": "error",

      // TypeScript 규칙
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      // 코드 길이 및 스타일 제한
      "max-lines": [
        "warn",
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
      "max-lines-per-function": [
        "warn",
        { max: 100, skipBlankLines: true, skipComments: true },
      ],
      "max-len": [
        "error",
        {
          code: 80,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "linebreak-style": ["error", "windows"],

      // React/JSX 규칙
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-props-no-spreading": [
        "error",
        { html: "ignore", custom: "enforce" },
      ],
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/jsx-handler-names": [
        "error",
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
          checkLocalVariables: true,
          checkInlineFunctionExpressions: true,
        },
      ],

      // 네이밍 컨벤션
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "has", "should", "can", "will", "did"],
        },
      ],
    },
  },

  // Next.js 앱 라우터 관련 default export 예외 처리
  {
    files: [
      "src/app/**/{page,layout,not-found,robots,sitemap,template,error,loading,global-error}.tsx",
      "src/middleware.ts",
      "*.config.{js,mjs,ts}",
    ],
    rules: {
      "import-x/no-default-export": "off",
    },
  },

  // Prettier 설정을 마지막에 두어 충돌 방지
  prettierConfig,
]);

export default eslintConfig;
