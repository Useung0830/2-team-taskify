// DashboardColorChoiceList.tsx
import { VariantProps, cva } from "class-variance-authority";

import { DashboardColorItem } from "./DashboardColorItem";

const sizeVariants = cva("flex gap-2", {
  variants: {
    size: {
      default: "h-10 w-73.75 md:h-15 md:w-135",
      lg: "h-22.5 w-185",
      edit: "h-22.5 w-full gap-4 max-lg:h-15 max-md:h-14 max-md:gap-3",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type ColorName = "red" | "orange" | "yellow" | "green" | "blue";

interface Props extends VariantProps<typeof sizeVariants> {
  selectedColorName: ColorName;
  onColorChange: (colorName: ColorName) => void;
}

export function DashboardColorChoiceList({
  size,
  selectedColorName,
  onColorChange,
}: Props) {
  const colorList: ColorName[] = ["red", "orange", "yellow", "green", "blue"];

  return (
    <div className="flex flex-col gap-3">
      <div className="text-gray-300">색상</div>
      <div className={sizeVariants({ size })}>
        {colorList.map((name) => (
          <DashboardColorItem
            key={name}
            color={name}
            isSelected={selectedColorName === name}
            handleClick={() => onColorChange(name)}
          />
        ))}
      </div>
    </div>
  );
}
