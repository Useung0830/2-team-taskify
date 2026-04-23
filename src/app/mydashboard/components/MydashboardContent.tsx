import Image from "next/image";

import leftbtn from "../assets/leftBtn.svg";
import rightBtn from "../assets/rightBtn.svg";
import { InventionContainer } from "../components/InventionContainer";
import { MydashboardList } from "../components/MydashboardList";

export function MydashboardContent() {
  return (
    <div className="bg-background font-pretendard min-h-screen min-w-275 overflow-x-auto text-gray-100">
      <h1 className="pt-6 pr-12.5 pb-4.5 pl-12.5 text-4xl">홈</h1>
      <div className="flex flex-col gap-5 px-12.5 pt-2.5 pb-10 text-xl">
        <div>내 대시보드</div>
        <MydashboardList />
        <div className="ml-auto flex gap-5 text-base">
          1 of 3
          <Image src={leftbtn} alt="left" />
          <Image src={rightBtn} alt="right" />
        </div>
      </div>
      <div className="flex flex-col gap-5 px-12.5 pt-2.5 pb-4.5 text-xl">
        <div className="flex justify-between">
          초대 받은 대시보드
          <input className="border border-gray-700" placeholder="임시input" />
        </div>
        <InventionContainer />
      </div>
    </div>
  );
}
