import { cva } from "class-variance-authority";
import { cn } from "@/util/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-100 disabled:opacity-50",
  {
    variants: {
      type: {
        primary:
          "bg-[#00A200] text-white hover:bg-[#0B8A0B] active:bg-[#00A200] disabled:bg-[#10671F] disabled:text-[#00330D]",
        secondary:
          "bg-[#3C3C41] text-[#F8F7FA] hover:bg-[#333236] active:bg-[#3C3C41] disabled:bg-[#3C3C41] disabled:text-[#787486]",
      },
      // 크기
      size: {
        lg: "h-[60px] w-[200px] gap-[8px] px-[30px] py-[6px] text-[18px]",
        md: "h-[50px] w-[200px] gap-[8px] px-[30px] py-[6px] text-[16px]",
        sm: "h-[36px] w-[120px] gap-[4px] px-[20px] py-[6px] text-[16px]",
        xs: "h-[29px] w-[91px] gap-[2px] px-[12px] py-[6px] text-[14px]",
      },
    },
    defaultVariants: {
      type: "primary",
      size: "lg",
    },
  }
);

export default function Button({ className, type, size, ...props }: any) {
  return (
    <button
      className={cn(buttonVariants({ type, size }), className)}
      {...props}
    >
      Label
    </button>
  );
}
