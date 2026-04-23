import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef } from "react";

const labelStyles = cva("font-pretendard font-semibold text-gray-300", {
  variants: {
    labelSize: {
      md: "text-base",
      sm: "text-sm",
    },
  },
  defaultVariants: {
    labelSize: "md",
  },
});

interface LabelProps
  extends ComponentPropsWithRef<"label">, VariantProps<typeof labelStyles> {}

function Label({ className, labelSize, ...props }: LabelProps) {
  return <label className={labelStyles({ labelSize, className })} {...props} />;
}

export { Label };
