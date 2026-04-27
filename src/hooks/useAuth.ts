import { useEffect } from "react";

import { postLogin } from "@/api/data";

interface Account {
  email: string;
  password: string;
}
export const useAuth = ({ email, password }: Account) => {
  useEffect(() => {
    const login = async () => {
      try {
        await postLogin({ email, password });
      } catch (error) {
        console.error("로그인 에러:", error);
      }
    };

    login();
  }, [email, password]);
};
