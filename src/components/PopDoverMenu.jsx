import Image from "next/image";
import icEdit from "@/assets/ic-edit.svg";
import icDelete from "@/assets/ic-delete.svg";

export function PopDoverMenu() {
  return (
    <div className="border-stroke absolute right-0 mt-2 w-35 rounded-xl border bg-[#2F2F33] shadow-lg">
      <ul className="flex flex-col items-center justify-center text-sm text-gray-700">
        <li className="flex cursor-pointer items-center justify-center gap-2.5 rounded-t-xl px-5.5 pt-4 pb-2.5 transition-colors duration-300 hover:bg-gray-800">
          <Image className="h-5" src={icEdit} alt="수정 버튼" />
          <span className="text-base text-white">수정하기</span>
        </li>
        <li className="flex cursor-pointer items-center justify-center gap-2.5 rounded-b-xl px-5.5 pt-2.5 pb-4 transition-colors duration-300 hover:bg-gray-800">
          <Image className="h-5" src={icDelete} alt="수정 버튼" />
          <span className="text-red text-base">삭제하기</span>
        </li>
      </ul>
    </div>
  );
}
