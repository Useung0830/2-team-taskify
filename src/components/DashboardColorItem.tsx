export interface DashboardColorItemProp {
  color: "red" | "orange" | "yellow" | "green" | "blue";
  isSelected: boolean; // 선택 여부 추가
  handleClick: () => void; // 클릭 이벤트 추가
}

export function DashboardColorItem({
  color,
  isSelected,
  handleClick,
}: DashboardColorItemProp) {
  const colorMatch = {
    red: "bg-profile-rose",
    orange: "bg-profile-orange",
    yellow: "bg-profile-yellow",
    green: "bg-profile-green",
    blue: "bg-profile-cobalt",
  };

  return (
    <div
      onClick={handleClick}
      className={`h-full w-full min-w-13 cursor-pointer rounded-[10px] transition-all duration-200 md:rounded-2xl ${colorMatch[color]} ${isSelected ? "ring-sky-blue ring-3" : "opacity-40 hover:opacity-70"} `}
    ></div>
  );
}
