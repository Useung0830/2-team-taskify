import { ComponentPropsWithRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

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
  extends ComponentPropsWithRef<"label">,
    VariantProps<typeof labelStyles> {}

const Label = ({ className, labelSize, ...props }: LabelProps) => {
  return <label className={labelStyles({ labelSize, className })} {...props} />;
};

export default Label;
