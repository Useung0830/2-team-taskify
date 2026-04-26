import Image from "next/image";

import rightbtn from "../assets/rightBtn.svg";

interface MyDashboardCardProps {
  children: React.ReactNode;
}

export function MyDashboardItemContainer({ children }: MyDashboardCardProps) {
  return (
    <div
      className={`bg-black-700 flex h-20 w-full items-center rounded-3xl border-2 border-gray-700 px-5 py-3`}
    >
      {children}
      <Image src={rightbtn} alt="right" className="ml-auto" />
    </div>
  );
}
