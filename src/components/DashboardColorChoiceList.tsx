import { DashboardColorItem } from "./DashboardColorItem";

interface DashboardColorChoiceListProp {
  height: number;
}

export function DashboardColorChoiceList({
  height,
}: DashboardColorChoiceListProp) {
  const colorList = ["red", "orange", "yellow", "green", "blue"] as const;
  return (
    <div className="flex flex-col gap-3">
      <div className="text-gray-300">색상</div>
      <div className={`flex h-[${height}px] gap-4`}>
        {colorList.map((color) => (
          <DashboardColorItem key={color} color={color} />
        ))}
      </div>
    </div>
  );
}
