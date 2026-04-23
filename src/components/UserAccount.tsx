import Image from "next/image";
import icSetting from "../assets/ic-setting.svg";

function UserAccount() {
  return (
    <div className="flex justify-between border-t-2 border-[#2C2B30] px-7.5 py-3 text-gray-100">
      <div className="justify-cente flex items-center gap-2">
        <div className="bg-profile-green relative flex h-7.5 w-7.5 items-center justify-center rounded-2xl">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] font-semibold whitespace-nowrap text-white">
            민영
          </span>
        </div>
        <span>박민영</span>
      </div>
      <Image className="h-6" src={icSetting} alt="설정 아이콘" />
    </div>
  );
}

export default UserAccount;
