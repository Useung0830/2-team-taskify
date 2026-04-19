import { useState } from "react";
import { InputWrapperStylesProps } from "./input-style";
import { InputContext } from "./input-context";
import { cn } from "@/util/cn";

interface InputRootProps extends InputWrapperStylesProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @description Input 컴포넌트의 루트
 * @param {React.ReactNode} children - Input 컴포넌트의 자식 요소
 * @param {"sm" | "md" | "lg"} inputSize - Input의 크기
 * @param {boolean} error - 에러 발생 여부
 * @param {boolean} disabled - Input의 비활성화 여부
 * @param {string} className - Input의 클래스 이름
 * @returns {JSX.Element} Input 컴포넌트의 루트
 */
const InputRoot = ({
  children,
  inputSize = "md",
  error = false,
  disabled = false,
  className,
}: InputRootProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePassword = () => setIsPasswordVisible((prev) => !prev);

  return (
    <InputContext.Provider
      value={{
        inputSize,
        error,
        disabled,
        isPasswordVisible,
        togglePassword,
      }}
    >
      <div
        className={cn(
          `flex w-full flex-col ${inputSize === "sm" ? "gap-y-2.5" : "gap-y-3"}`,
          className
        )}
      >
        {children}
      </div>
    </InputContext.Provider>
  );
};

export default InputRoot;