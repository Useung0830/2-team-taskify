import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { DashboardColorItem } from "./DashboardColorItem";

type DashboardColorChoiceListProp = VariantProps<typeof sizeVariants> & {
  responsiveSize?: string;
};

const sizeVariants = cva("flex gap-2", {
  variants: {
    size: {
      default: "h-15 w-135",
      sm: "h-10 w-73.75",
      lg: "h-22.5 w-185",
    },
  },

  defaultVariants: {
    size: "default",
  },
});

export function DashboardColorChoiceList({
  size,
  responsiveSize,
}: DashboardColorChoiceListProp) {
  const colorList = ["red", "orange", "yellow", "green", "blue"] as const;
  return (
    <div className="flex flex-col gap-3">
      <div className="text-gray-300">색상</div>
      <div className={twMerge(sizeVariants({ size }), responsiveSize)}>
        {colorList.map((color) => (
          <DashboardColorItem key={color} color={color} />
        ))}
      </div>
    </div>
  );
}
