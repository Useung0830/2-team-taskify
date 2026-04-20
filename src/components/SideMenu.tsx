import Image from "next/image";
import icPlus from "../assets/ic-plus.svg";
import icHome from "../assets/ic-home.svg";
import icCrown from "../assets/ic-crown.svg";
import icSetting from "../assets/ic-setting.svg";
import colorChipsBlue from "../assets/colorchips-blue.svg";
import colorChipsGreen from "../assets/colorchips-green.svg";
import colorChipsOrange from "../assets/colorchips-orange.svg";
import colorChipsRed from "../assets/colorchips-red.svg";
import colorChipsYellow from "../assets/colorchips-yellow.svg";

const CHIP_IMAGE_MAP: Record<string, string> = {
  "#206E4E": colorChipsGreen,
  "#AE2E24": colorChipsRed,
  "#1458BC": colorChipsBlue,
  "#BD8C00": colorChipsYellow,
  "#9F4B00": colorChipsOrange,
};

function SideMenu() {
  const colorCode = "#1458BC"; //임시 변수
  const chipSrc = CHIP_IMAGE_MAP[colorCode] || colorChipsGreen;

  return (
    <div className="bg-black-900 flex h-screen w-85 flex-col pt-2.5">
      <div className="flex h-11 items-start px-4 text-2xl text-gray-100">
        Logo
      </div>
      <div className="flex w-85 flex-1 flex-col justify-start px-6">
        <div className="flex flex-col">
          <div className="flex items-center justify-between rounded-xl px-3.5 pt-3 pb-2.5">
            <span className="text-base font-bold text-gray-400">
              대시보드 추가
            </span>
            <Image src={icPlus} alt="서비스 로고" />
          </div>
          <div className="flex items-center gap-2 rounded-xl px-3.5 py-4">
            <Image className="h-6" src={icHome} alt="홈 로고" />
            <span className="text-lg font-medium text-gray-300">홈</span>
          </div>
          <div className="flex flex-col text-gray-100">
            <div className="flex items-center justify-between rounded-xl px-2.5 py-4 transition-colors duration-300 ease-in-out hover:bg-[#2C2B30]">
              <div className="flex items-center justify-center gap-2">
                <Image className="h-6 w-6" src={chipSrc} alt="컬러칩" />
                <span>사이드 버튼</span>
              </div>
              <Image className="h-6" src={icCrown} alt="왕관 아이콘" />
            </div>
            <div>사이드 버튼</div>
            <div>사이드 버튼</div>
            <div>사이드 버튼</div>
            <div>사이드 버튼</div>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default SideMenu;
