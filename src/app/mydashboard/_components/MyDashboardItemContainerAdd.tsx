import Image from "next/image";
import Link from "next/link";

import addBtn from "@/assets/mydashboard/mydashboardAddBtn.svg";

export function MyDashboardItemContainerAdd() {
  return (
    <Link
      href={"/new-dashboard"}
      className="bg-black-800 flex h-20 w-full items-center justify-center gap-2.5 rounded-3xl border-2 border-dashed border-gray-700 px-5 py-3"
    >
      새로운 대시보드
      <Image src={addBtn} alt="add" />
    </Link>
  );
}
