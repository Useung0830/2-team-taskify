import { ComponentPropsWithRef } from "react";
import { InputWrapperStylesProps } from "./input-style";
import { useInputContext } from "./input-context";
import { cn } from "@/util/cn";

interface InputFieldProps
  extends
    ComponentPropsWithRef<"input">,
    Omit<InputWrapperStylesProps, "error" | "disabled"> {}

/**
 * @description Input.Field
 * @param {React.ReactNode} children - Input.Field의 자식 요소
 * @param {string} className - Input.Field의 클래스 이름
 * @returns {JSX.Element} Input.Field 컴포넌트
 */
const InputField = ({ className, type, ...props }: InputFieldProps) => {
  const { isPasswordVisible, disabled } = useInputContext();

  // 비밀번호 타입일 경우 토글 상태에 따라 실제 type 결정
  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <input
      type={inputType}
      disabled={disabled ?? undefined}
      className={cn(
        "w-full bg-transparent text-gray-300 outline-none placeholder:text-gray-500 disabled:text-gray-400",
        className
      )}
      {...props}
    />
  );
};

export default InputField;
