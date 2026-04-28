import Image from "next/image";
import Link from "next/link";

import rightbtn from "@/assets/mydashboard/rightBtn.svg";

interface MyDashboardCardProps {
  children: React.ReactNode;
  dashid: number;
}

export function MyDashboardItemContainer({
  children,
  dashid,
}: MyDashboardCardProps) {
  return (
    <div
      className={`bg-black-700 flex h-20 w-full items-center justify-between rounded-3xl border-2 border-gray-700 px-5 py-3`}
    >
      {children}
      <Link href={`/dashboard/${dashid}`} className="flex gap-1">
        <Image src={rightbtn} alt="right" className="ml-auto" />
      </Link>
    </div>
  );
}
