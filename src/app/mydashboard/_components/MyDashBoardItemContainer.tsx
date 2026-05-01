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
    <Link
      href={`/dashboard/${dashid}`}
      className="bg-black-700 flex h-20 w-full items-center justify-between gap-1 rounded-3xl border-2 border-gray-700 px-5 py-3"
    >
      {children}
      <Image src={rightbtn} alt="right" className="ml-auto" />
    </Link>
  );
}
