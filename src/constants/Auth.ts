export const AUTH_ERROR_MESSAGE = {
  EMAIL_ERROR: "이메일 형식으로 작성해 주세요.",
  NICKNAME_ERROR: "열 자 이하로 입력해주세요.",
  PASSWORD_ERROR: "비밀번호는 8자 이상 입력해주세요.",
  PASSWORD_CHECK_ERROR: "비밀번호가 일치하지 않습니다.",
} as const;

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
