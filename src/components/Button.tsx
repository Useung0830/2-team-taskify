import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/util/cn";

const buttonVariants = cva(
  "inline-flex w-fit items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-100 disabled:cursor-not-allowed",
  {
    variants: {
      colortype: {
        primary:
          "bg-brand-500 hover:bg-brand-600 active:bg-brand-500 disabled:bg-brand-800 disabled:text-brand-950 text-white",
        secondary:
          "hover:bg-black-600 bg-gray-900 text-gray-100 active:bg-gray-900 disabled:bg-gray-900 disabled:text-gray-500",
        ghost: "bg-transparent text-white disabled:text-gray-500",
      },
      size: {
        lg: "h-[60px] px-[30px] py-[6px] text-[18px]",
        md: "h-[50px] px-[30px] py-[6px] text-[16px]",
        sm: "h-[36px] px-[20px] py-[6px] text-[16px]",
        xs: "h-[29px] px-[12px] py-[6px] text-[14px]",
      },
    },
    defaultVariants: {
      colortype: "primary",
      size: "lg",
    },
  }
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isHover?: boolean;
  isActive?: boolean;
}

export default function Button({
  className,
  colortype,
  size,
  disabled,
  isHover,
  isActive,
  children,
  ...props
}: ButtonProps) {
  const getGhostStyle = () => {
    if (colortype !== "ghost") return "";

    if (isActive) {
      return cn(
        "bg-modal-background text-white",
        size === "lg" ? "rounded-[12px]" : "rounded-[8px]"
      );
    }
    if (isHover) {
      return cn(
        "bg-black-700 text-white",
        size === "lg" ? "rounded-[12px]" : "rounded-[8px]"
      );
    }
    if (disabled) return "bg-transparent text-gray-500";

    return cn("bg-transparent", size === "lg" ? "text-[16px]" : "text-[14px]");
  };

  return (
    <button
      className={cn(
        buttonVariants({ colortype, size }),
        // Primary, Secondary 상태
        !disabled &&
          colortype !== "ghost" && [
            isHover &&
              (colortype === "primary" ? "bg-brand-600" : "bg-black-600"),
            isActive &&
              (colortype === "primary" ? "bg-brand-500" : "bg-gray-900"),
          ],
        // Ghost 상태
        getGhostStyle(),
        className
      )}
      disabled={disabled}
      {...props}
    >
      <span className="mx-1">{children || "Label"}</span>
    </button>
  );
}
