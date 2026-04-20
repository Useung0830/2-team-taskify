import { cn } from "@/util/cn";

import { useInputContext } from "./input-context";
import { InputWrapperStyles } from "./input-style";

interface InputWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @description Input 컴포넌트의 Wrapper
 * @param {React.ReactNode} children - Input 컴포넌트의 자식 요소
 * @param {string} className - Input.Wrapper의 클래스 이름
 * @returns {JSX.Element} Input.Wrapper 컴포넌트
 */
const InputWrapper = ({ children, className }: InputWrapperProps) => {
  const { inputSize, errorMsg, disabled } = useInputContext();
  const error = !!errorMsg;
  return (
    <div
      className={cn(
        InputWrapperStyles({ inputSize, error, disabled }),
        className
      )}
    >
      {children}
    </div>
  );
};

export default InputWrapper;
