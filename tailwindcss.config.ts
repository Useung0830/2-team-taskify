import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src 폴더 안의 모든 파일을 감시
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // app 폴더가 src 밖에 있을 경우 대비
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // components 폴더 대비
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
