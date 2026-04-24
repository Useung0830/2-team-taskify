import Image from "next/image";

import icHome from "../assets/ic-home.svg";

function SideHomeButton() {
  return (
    <div className="flex items-center gap-2 rounded-xl px-3.5 py-4">
      <Image className="h-6" src={icHome} alt="홈 로고" />
      <span className="text-lg font-medium text-gray-200">홈</span>
    </div>
  );
}

export default SideHomeButton;
