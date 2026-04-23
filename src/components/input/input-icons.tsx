import { cn } from "@/util/cn";

import EyeCloseIcon from "../icons/eye-close-icon";
import EyeOpenIcon from "../icons/eye-open-icon";
import SearchIcon from "../icons/search-icon";

import { useInputContext } from "./input-context";

interface InputIconProps {
  className?: string;
}

/**
 * @description 검색 아이콘
 * @param {string} className - 검색 아이콘의 클래스 이름
 */
const InputSearchIcon = ({ className }: InputIconProps) => {
  const { inputSize } = useInputContext();
  const size = inputSize === "sm" ? 18 : 20;
  return (
    <button
      type="button"
      aria-label="검색하기"
      className="flex shrink-0 items-center"
    >
      <SearchIcon
        width={size}
        height={size}
        className={cn(
          "fill-gray-700 transition-colors group-focus-within:fill-gray-500",
          className
        )}
      />
    </button>
  );
};

/**
 * @description 비밀번호 토글 아이콘
 * @param {string} className - 비밀번호 토글 아이콘의 클래스 이름
 */
const InputPasswordToggle = ({ className }: InputIconProps) => {
  const { inputSize, isPasswordVisible, togglePassword } = useInputContext();
  const size = inputSize === "sm" ? 18 : 20;

  return (
    <button
      type="button"
      onClick={togglePassword}
      aria-label={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
      className={cn("flex shrink-0 cursor-pointer items-center", className)}
    >
      {isPasswordVisible ? (
        <EyeOpenIcon
          width={size}
          height={size}
          className="fill-gray-700 transition-colors group-focus-within:fill-gray-500"
        />
      ) : (
        <EyeCloseIcon
          width={size}
          height={size}
          className="fill-gray-700 transition-colors group-focus-within:fill-gray-500"
        />
      )}
    </button>
  );
};

export { InputSearchIcon, InputPasswordToggle };
