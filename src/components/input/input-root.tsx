"use client";

import { useState } from "react";

import { cn } from "@/util/cn";

import { InputContext } from "./input-context";
import { InputWrapperStylesProps } from "./input-style";

interface InputRootProps extends Omit<InputWrapperStylesProps, "error"> {
  children: React.ReactNode;
  errorMessage?: string;
  className?: string;
}

/**
 * @description Input 컴포넌트의 루트
 * @param {React.ReactNode} children - Input 컴포넌트의 자식 요소
 * @param {"sm" | "md" | "lg"} inputSize - Input의 크기
 * @param {string} error - 에러 메시지
 * @param {boolean} isDisabled - Input의 비활성화 여부
 * @param {string} className - Input의 클래스 이름
 * @returns {JSX.Element} Input 컴포넌트의 루트
 */
export function InputRoot({
  children,
  inputSize = "md",
  errorMessage = "",
  isDisabled = false,
  className,
}: InputRootProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePassword = () => setIsPasswordVisible((prev) => !prev);

  return (
    <InputContext.Provider
      value={{
        inputSize,
        errorMessage,
        isDisabled,
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
}
