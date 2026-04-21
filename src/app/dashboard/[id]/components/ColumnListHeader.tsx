import Image from "next/image";
import plusicon from "../assets/plusIcon.svg";
import settingicon from "../assets/settingIcon.svg";

export default function ColumnListHeader({ columnTitle, contentCount }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-baseline justify-center gap-2">
        <h1 className="text-[20px] text-white">{columnTitle}</h1>
        <span className="text-gray-400">{contentCount}</span>
      </div>
      <div className="flex gap-5">
        <Image src={plusicon} alt="add" />
        <Image src={settingicon} alt="setting" />
      </div>
    </div>
  );
}
