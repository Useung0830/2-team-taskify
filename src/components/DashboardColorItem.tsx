import { ColorName } from "./DashboardColorChoiceList";

export interface DashboardColorItemProp {
  color: ColorName;
  isSelected: boolean; // 선택 여부 추가
  handleClick: () => void; // 클릭 이벤트 추가
  hasSelection: boolean;
}

export function DashboardColorItem({
  color,
  isSelected,
  handleClick,
  hasSelection = true,
}: DashboardColorItemProp) {
  const colorMatch = {
    red: "bg-profile-rose",
    orange: "bg-profile-orange",
    yellow: "bg-profile-yellow",
    green: "bg-profile-green",
    blue: "bg-profile-cobalt",
  };

  let opacity = "";

  if (hasSelection) {
    //hasSelection이 있으면 전체 흐리게, 없으면 전체 밝게
    opacity = "opacity-40";
  }
  return (
    <div
      onClick={handleClick}
      className={`h-full w-full min-w-13 cursor-pointer rounded-[10px] transition-all duration-200 md:rounded-2xl ${colorMatch[color]} ${isSelected ? "ring-sky-blue ring-3" : ` ${opacity} hover:opacity-70`} `}
    ></div>
  );
}
