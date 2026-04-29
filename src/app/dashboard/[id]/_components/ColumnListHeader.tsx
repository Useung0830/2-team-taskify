import Image from "next/image";
import Link from "next/link";

import plusicon from "@/assets/dashboard/ic-plusbtn.svg";
import settingicon from "@/assets/dashboard/ic-setting.svg";
interface ColumnListHeaderProp {
  title: string;
  contentCount: number;
  /**
   * 톱니바퀴 클릭 시 칼럼 수정/삭제 모달창이 뜨는 column edit으로 이동하는데 필요하여 옵셔널 속성 추가
   **/
  onSettingClick?: () => void;
}

export function ColumnListHeader({
  title,
  contentCount,
  onSettingClick,
}: ColumnListHeaderProp) {
  const handleColumnEdit = () => {
    if (onSettingClick) {
      onSettingClick();
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-baseline justify-center gap-2">
        <h1 className="text-[20px] text-white">{title}</h1>
        <span className="text-gray-400">{contentCount}</span>
      </div>
      <div className="flex gap-5">
        <Link href={"/task-add"}>
          <Image src={plusicon} alt="add" />
        </Link>
        <Link href={"/column-modify"}>
          <Image src={settingicon} alt="setting" onClick={handleColumnEdit} />
        </Link>
      </div>
    </div>
  );
}
