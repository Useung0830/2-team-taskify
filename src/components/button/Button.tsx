import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

import { ProfileIcon } from "./ProfileIcon";
import { SquarePlusIcon } from "./SquarePlusIcon";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-100 disabled:cursor-not-allowed",
  {
    variants: {
      // [Type] 색상
      colortype: {
        primary:
          "rounded-full bg-[#00A200] text-white hover:bg-[#0B8A0B] active:bg-[#00A200] disabled:bg-[#10671F] disabled:text-[#00330D]",
        secondary:
          "hover:bg-black-600 rounded-full bg-[#3C3C41] text-[#F8F7FA] active:bg-[#3C3C41] disabled:bg-[#3C3C41] disabled:text-gray-500",
        ghost: "bg-transparent text-white disabled:text-gray-500",
      },
      // [Size] 크기
      size: {
        lg: "h-15 min-w-50 gap-2 px-7.5 py-1.5 text-[18px]",
        md: "h-12.5 min-w-50 gap-2 px-7.5 py-1.5 text-[16px]",
        sm: "h-9 min-w-30 gap-1 px-5 py-1.5 text-[16px]",
        xs: "h-7.25 min-w-22.75 gap-0.5 px-3 py-1.5 text-[14px]",
      },
    },
    defaultVariants: {
      colortype: "primary",
      size: "lg",
    },
  }
);

// Props 정의
interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isHovered?: boolean;
  isActive?: boolean;
}

export function Button({
  className,
  colortype,
  size,
  disabled,
  isHovered,
  isActive,
  children,
  ...props
}: ButtonProps) {
  // + 아이콘 로직
  const handlePlusIconFill = () => {
    if (disabled) return colortype === "secondary" ? "#787486" : "#00330D";
    if (isActive) return "white";
    if (isHovered && colortype === "primary") return "#ECECEE";
    return colortype === "secondary" ? "#D6D5D9" : "white";
  };

  // 프로필 아이콘 로직
  const handleTypeGhost = () => {
    if (colortype !== "ghost") return null;

    if (isActive) {
      return {
        bg: "bg-[#242429]",
        rounded: size === "lg" ? "rounded-[12px]" : "rounded-[8px]",
        text: "text-white",
      };
    }
    if (isHovered) {
      return {
        bg: "bg-[#262629]",
        rounded: size === "lg" ? "rounded-[12px]" : "rounded-[8px]",
        text: "text-white",
      };
    }
    if (disabled)
      return { bg: "bg-transparent", rounded: "", text: "text-[#787486]" };

    return {
      bg: "bg-transparent",
      rounded: "",
      text: size === "lg" ? "text-[16px]" : "text-[14px]",
    };
  };

  const ghostStyle = handleTypeGhost();

  const isSquarePlusIcon =
    colortype !== "ghost" && (size === "sm" || size === "xs");
  const isProfileIcon =
    colortype === "ghost" && (size === "lg" || size === "md");

  const iconSize = size === "xs" ? 14 : 16;
  const iconFill = colortype === "ghost" ? "#769683" : handlePlusIconFill();

  return (
    <button
      className={cn(
        buttonVariants({ colortype, size }),
        // 기본 Label 및 + 아이콘 Label 버튼
        !disabled &&
          colortype !== "ghost" && [
            isHovered &&
              (colortype === "primary" ? "bg-[#0B8A0B]" : "bg-black-600"),
            isActive &&
              (colortype === "primary" ? "bg-[#00A200]" : "bg-[#3C3C41]"),
          ],

        // 프로필 아이콘 Label 버튼
        colortype === "ghost" &&
          ghostStyle && [ghostStyle.bg, ghostStyle.rounded, ghostStyle.text],

        className
      )}
      disabled={disabled}
      {...props}
    >
      {/* 앞쪽 아이콘 */}
      {isSquarePlusIcon && <SquarePlusIcon size={iconSize} fill={iconFill} />}
      {isProfileIcon && (
        <ProfileIcon size={size as "lg" | "md"} fill={iconFill} />
      )}

      <span className="mx-1">{children || "Label"}</span>

      {/* 뒤쪽 아이콘 */}
      {isSquarePlusIcon && <SquarePlusIcon size={iconSize} fill={iconFill} />}
      {isProfileIcon && (
        <ProfileIcon size={size as "lg" | "md"} fill={iconFill} />
      )}
    </button>
  );
}
