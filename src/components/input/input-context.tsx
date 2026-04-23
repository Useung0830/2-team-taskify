import { createContext, useContext } from "react";

import { InputWrapperStylesProps } from "./input-style";

interface InputContextType extends Omit<InputWrapperStylesProps, "error"> {
  isPasswordVisible: boolean;
  handlePassword: () => void;
  errorMessage?: string;
}

/**
 * @description Input 컴포넌트의 Context
 */
const InputContext = createContext<InputContextType | null>(null);

/**
 * @description Input 컴포넌트의 Context를 반환
 * @returns Input 컴포넌트의 Context
 */
const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context)
    throw new Error("Input 내부 컴포넌트들은 <Input /> 안에 있어야 합니다.");
  return context;
};

export { InputContext, useInputContext };
