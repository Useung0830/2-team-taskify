import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/util/cn";
import PlusIcon from "@/assets/button-icon/PlusIcon";
import ProfileIcon from "@/assets/button-icon/ProfileIcon";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-100 disabled:cursor-not-allowed",
  {
    variants: {
      // [Type] 색상
      colortype: {
        primary:
          "bg-brand-500 hover:bg-brand-600 active:bg-brand-500 disabled:bg-brand-800 disabled:text-brand-950 rounded-full text-white",
        secondary:
          "hover:bg-black-600 rounded-full bg-gray-900 text-gray-100 active:bg-gray-900 disabled:bg-gray-900 disabled:text-gray-500",
        ghost: "bg-transparent text-white disabled:text-gray-500",
      },
      // [Size] 크기
      size: {
        lg: "h-[60px] min-w-[200px] gap-[8px] px-[30px] py-[6px] text-[18px]",
        md: "h-[50px] min-w-[200px] gap-[8px] px-[30px] py-[6px] text-[16px]",
        sm: "h-[36px] min-w-[120px] gap-[4px] px-[20px] py-[6px] text-[16px]",
        xs: "h-[29px] min-w-[91px] gap-[2px] px-[12px] py-[6px] text-[14px]",
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

export default function Button({
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
    if (disabled) return colortype === "secondary" ? "gray-500" : "brand-950";
    if (isActive) return "white";
    if (isHovered && colortype === "primary") return "gray-200";
    return colortype === "secondary" ? "gray-300" : "white";
  };

  // 프로필 아이콘 로직
  const handleTypeGhost = () => {
    if (colortype !== "ghost") return null;

    if (isActive) {
      return {
        bg: "bg-modal-background",
        rounded: size === "lg" ? "rounded-[12px]" : "rounded-[8px]",
        text: "text-white",
      };
    }
    if (isHovered) {
      return {
        bg: "bg-black-700",
        rounded: size === "lg" ? "rounded-[12px]" : "rounded-[8px]",
        text: "text-white",
      };
    }
    if (disabled)
      return { bg: "bg-transparent", rounded: "", text: "text-gray-500" };

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
              (colortype === "primary" ? "bg-brand-600" : "bg-black-600"),
            isActive &&
              (colortype === "primary" ? "bg-brand-500" : "bg-gray-900"),
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
      {isSquarePlusIcon && <PlusIcon size={iconSize} fill={iconFill} />}
      {isProfileIcon && (
        <ProfileIcon size={size as "lg" | "md"} fill={iconFill} />
      )}

      <span className="mx-1">{children || "Label"}</span>

      {/* 뒤쪽 아이콘 */}
      {isSquarePlusIcon && <PlusIcon size={iconSize} fill={iconFill} />}
      {isProfileIcon && (
        <ProfileIcon size={size as "lg" | "md"} fill={iconFill} />
      )}
    </button>
  );
}
