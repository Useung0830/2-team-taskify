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
    <div className={`h-22.5 w-full rounded-2xl ${colorMatch[color]}`}></div>
  );
}
