import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex w-fit cursor-pointer items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all active:scale-95 disabled:cursor-not-allowed",
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
        lg: "h-15 px-7 py-1.5 text-lg",
        md: "h-12 px-7 py-1.5 text-base",
        sm: "h-9 px-4 py-1.5 text-base",
        xs: "h-7 px-3 py-1.5 text-sm",
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
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  colortype,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ colortype, size }), className)}
      {...props}
    >
      <span className="mx-1">{children || "Label"}</span>
    </button>
  );
}
