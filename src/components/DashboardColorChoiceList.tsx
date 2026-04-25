import { cva, VariantProps } from "class-variance-authority";

import { DashboardColorItem } from "./DashboardColorItem";

type DashboardColorChoiceListProp = VariantProps<typeof sizeVariants>;

const sizeVariants = cva("flex gap-4 max-md:gap-3", {
  variants: {
    size: {
      default: "h-15 w-135",
      sm: "h-10 w-73.75",
      lg: "h-22.5 w-185",
      edit: "h-22.5 w-full max-[1172px]:h-15 max-md:h-14.25",
    },
  },

  defaultVariants: {
    size: "default",
  },
});

export function DashboardColorChoiceList({
  size,
}: DashboardColorChoiceListProp) {
  const colorList = ["red", "orange", "yellow", "green", "blue"] as const;
  return (
    <div className="flex flex-col gap-3 max-md:gap-2.5">
      <div className="text-gray-300">색상</div>
      <div className={sizeVariants({ size })}>
        {colorList.map((color) => (
          <DashboardColorItem key={color} color={color} />
        ))}
      </div>
    </div>
  );
}
