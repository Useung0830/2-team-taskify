import Image from "next/image";

import icX from "@/assets/ic-x.svg";

interface DashboardEditHeaderProps {
  title: string;
}

export function DashboardEditHeader({ title }: DashboardEditHeaderProps) {
  return (
    <div className="relative mt-7.5 mb-3.5 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-100">{title}</h1>
      <div className="relative top-3 left-20 flex flex-col items-center justify-center gap-1.5 max-2xl:left-0 max-lg:top-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 max-lg:h-7.5 max-lg:w-7.5">
          <Image src={icX} alt="돌아가기 버튼" height={24} width={24} />
        </div>
        <span className="text-sm font-semibold text-gray-300 max-lg:hidden">
          돌아가기
        </span>
      </div>
    </div>
  );
}
