import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "flex w-full cursor-pointer items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all active:scale-95 disabled:cursor-not-allowed",
  {
    variants: {
      colorType: {
        primary:
          "bg-brand-500 hover:bg-brand-600 active:bg-brand-500 disabled:bg-brand-800 disabled:text-brand-950 text-white",
        secondary:
          "hover:bg-black-600 bg-gray-900 text-gray-100 active:bg-gray-900 disabled:bg-gray-900 disabled:text-gray-500",
        ghost: "bg-transparent text-white disabled:text-gray-500",
        red: "bg-red text-white hover:bg-red-500 active:bg-red-900",
      },
      size: {
        lg: "h-15 text-lg",
        md: "h-12 text-base",
        sm: "h-9 text-base",
        xs: "h-7 text-sm",
      },
    },
    defaultVariants: {
      colorType: "primary",
      size: "lg",
    },
  }
);
interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
export function Button({
  className,
  colorType,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ colorType, size }), className)}
      {...props}
    >
      <span className="mx-1">{children || "Label"}</span>
    </button>
  );
}
