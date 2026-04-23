export interface DashboardColorItemProp {
  color: "red" | "orange" | "yellow" | "green" | "blue";
}

export function DashboardColorItem({ color }: DashboardColorItemProp) {
  const colorMatch = {
    red: "bg-profile-rose",
    orange: "bg-profile-orange",
    yellow: "bg-profile-yellow",
    green: "bg-profile-green",
    blue: "bg-profile-cobalt",
  };
  return (
    <div
      className={`h-full w-full cursor-pointer rounded-2xl ${colorMatch[color]}`}
    ></div>
  );
}
