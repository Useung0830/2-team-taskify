import Image from "next/image";
import Link from "next/link";

import icHome from "../assets/common/ic-home.svg";

function SideHomeButton() {
  return (
    <Link href={"/mydashboard"}>
      <div className="flex items-center gap-2 rounded-xl px-3.5 py-4">
        <Image className="h-6" src={icHome} alt="홈 로고" />
        <span className="text-lg font-medium text-gray-200">홈</span>
      </div>
    </Link>
  );
}

export { SideHomeButton };
