import { cn } from "@/util/cn";

import { useInputContext } from "./input-context";

interface InputErrorProps {
  className?: string;
}

/**
 * @description Input 컴포넌트의 에러 메시지
 * @param {string} className - 에러 메시지에 추가할 클래스
 */
function InputError({ className }: InputErrorProps) {
  const { errorMessage } = useInputContext();

  if (!errorMessage) return null;
  return (
    <p className={cn("text-red px-1 text-sm font-medium", className)}>
      {errorMessage}
    </p>
  );
}

export default InputError;
