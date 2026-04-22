import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js";
import typescriptESLint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
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
      "@typescript-eslint": typescriptESLint,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    settings: {
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
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

      // import 시 {js, jsx, ts, tsx} 확장자 사용하지 않도록 설정
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

      // 한 파일에 export가 하나일 때 default export 규칙 off
      "import-x/prefer-default-export": "off",

      // 경로 해석 실패 방지
      "import-x/no-unresolved": "off",

      // default export 자체를 사용 금지
      "import-x/no-default-export": "error",

      // 순서 정렬
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

      // any 타입 사용 금지
      "@typescript-eslint/no-explicit-any": "error",

      // type 정의 시 interface 사용
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      // console.log 사용 시 경고
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // 변수 선언 시 const 사용 강제
      "prefer-const": "error",

      // 불필요한 fragment 사용 방지
      "react/jsx-no-useless-fragment": "warn",

      // props spreading 규칙
      "react/jsx-props-no-spreading": [
        "error",
        // html 요소의 경우 props spreading 허용, custom 컴포넌트의 경우 props spreading 금지
        { html: "ignore", custom: "enforce" },
      ],

      // JSX를 사용하는 파일에서만 .jsx, .tsx 확장자 사용 강제
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],

      // 이벤트 핸들러 네이밍 컨벤션
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
          // 일반 변수는 camelCase, 상수 등은 UPPER_CASE, 컴포넌트는 PascalCase
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
          // 함수는 camelCase 또는 PascalCase
          // camelCase는 react hook 등이 사용
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          // interface는 PascalCase로 작성
          selector: "interface",
          format: ["PascalCase"],
        },
        {
          // boolean 변수는 PascalCase로 작성
          // 추가적으로 is, has, should, can, will, did로 시작
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
      "src/app/**/{page,layout,not-found,robots,sitemap,template,error,loading,global-error,default}.tsx",
      "src/middleware.ts",
      "**/*.config.{js,mjs,ts}",
    ],
    rules: {
      "import-x/no-default-export": "off",
    },
  },

  // Prettier 설정을 마지막에 두어 충돌 방지
  prettierConfig,
]);

export default eslintConfig;
