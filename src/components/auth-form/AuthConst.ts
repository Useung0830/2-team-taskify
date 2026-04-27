export const AUTH_CONTENT = {
  login: {
    buttonText: "로그인",
    footerMessage: "회원이 아니신가요?",
    footerLinkText: "회원가입하기",
    footerHref: "/signup",
  },
  signup: {
    buttonText: "회원가입",
    footerMessage: "이미 회원이신가요?",
    footerLinkText: "로그인하기",
    footerHref: "/login",
  },
} as const;
