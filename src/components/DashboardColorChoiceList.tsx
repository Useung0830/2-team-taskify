import { DashboardColorItem } from "./DashboardColorItem";

export function DashboardColorChoiceList() {
  const colorList = ["red", "orange", "yellow", "green", "blue"] as const;
  return (
    <div className="flex w-182.5 flex-col gap-3">
      <div className="text-gray-300">색상</div>
      <div className="flex gap-4">
        {colorList.map((color) => (
          <DashboardColorItem key={color} color={color} />
        ))}
      </div>
    </div>
  );
}
