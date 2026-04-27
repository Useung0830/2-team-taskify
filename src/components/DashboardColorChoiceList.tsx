"use client";

import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";

import { DashboardColorItem } from "./DashboardColorItem";

type DashboardColorChoiceListProp = VariantProps<typeof sizeVariants>;

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

type ColorType = "red" | "orange" | "yellow" | "green" | "blue";

export function DashboardColorChoiceList({
  size,
}: DashboardColorChoiceListProp) {
  const colorList: ColorType[] = ["red", "orange", "yellow", "green", "blue"];

  const [selectedColor, setSelectedColor] = useState<ColorType>("red");

  return (
    <div className="flex flex-col gap-3">
      <div className="text-gray-300">색상</div>
      <div className={sizeVariants({ size })}>
        {colorList.map((color) => (
          <DashboardColorItem
            key={color}
            color={color}
            isSelected={selectedColor === color}
            handleClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
}
