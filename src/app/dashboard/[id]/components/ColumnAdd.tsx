import Image from "next/image";
import plusbtn from "../assets/plusbtn.svg";

export default function ColumnAdd() {
  return (
    <div className="bg-black-700 flex h-15 min-w-80 gap-2 rounded-[18px] px-3.5 py-4">
      <Image src={plusbtn} alt="새로운 컬럼 추가 버튼" />
      <div className="pl-1 text-[18px] font-medium text-gray-400">
        새로운 컬럼 추가
      </div>
    </div>
  );
}
