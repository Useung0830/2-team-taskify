import Image from "next/image";
import icPlus from "../assets/ic-plus.svg";

function DashboardAdd() {
  return (
    <div className="flex items-center justify-between rounded-xl px-3.5 pt-3 pb-2.5">
      <span className="text-base font-bold text-gray-400">대시보드 추가</span>
      <Image src={icPlus} alt="서비스 로고" />
    </div>
  );
}

export default DashboardAdd;
