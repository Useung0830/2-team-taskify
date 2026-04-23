import Image from "next/image";

import addBtn from "../assets/mydashboardAddBtn.svg";

export function MyDashboardItemContainerAdd() {
  return (
    <div
      className={`bg-black-800 flex h-20 w-78.75 items-center justify-center gap-2.5 rounded-3xl border-2 border-dashed border-gray-700 px-5 py-3`}
    >
      새로운 대시보드
      <Image src={addBtn} alt="add" />
    </div>
  );
}
