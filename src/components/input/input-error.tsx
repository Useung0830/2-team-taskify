import { cn } from "@/util/cn";

interface InputErrorProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @description Input 컴포넌트의 에러 메시지
 * @param {React.ReactNode} children - 에러를 표시할 메시지
 * @param {string} className - 에러 메시지에 추가할 클래스
 */
const InputError = ({ children, className }: InputErrorProps) => {
  if (!children) return null;
  return (
    <p className={cn("text-red px-1 text-sm font-medium", className)}>
      {children}
    </p>
  );
};

export default InputError;
