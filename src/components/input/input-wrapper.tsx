import { cn } from "@/lib/cn";

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
function InputWrapper({ children, className }: InputWrapperProps) {
  const { inputSize, errorMessage, disabled: isDisabled } = useInputContext();
  return (
    <div
      className={cn(
        InputWrapperStyles({
          inputSize,
          error: !!errorMessage,
          disabled: isDisabled,
        }),
        className
      )}
    >
      {children}
    </div>
  );
}

export { InputWrapper };
