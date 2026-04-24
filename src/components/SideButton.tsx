import Image from "next/image";

import colorChipsBlue from "../assets/colorchips-blue.svg";
import colorChipsGreen from "../assets/colorchips-green.svg";
import colorChipsOrange from "../assets/colorchips-orange.svg";
import colorChipsRed from "../assets/colorchips-red.svg";
import colorChipsYellow from "../assets/colorchips-yellow.svg";
import icCrown from "../assets/ic-crown.svg";

const CHIP_IMAGE_MAP: Record<string, string> = {
  "#206E4E": colorChipsGreen,
  "#AE2E24": colorChipsRed,
  "#1458BC": colorChipsBlue,
  "#BD8C00": colorChipsYellow,
  "#9F4B00": colorChipsOrange,
};

function SideButton({ title = "사이드 메뉴", color = "#206E4E" }) {
  const chipSrc = CHIP_IMAGE_MAP[color] || colorChipsGreen;

  return (
    <div className="flex items-center justify-between rounded-xl px-2.5 py-4 transition-colors duration-300 ease-in-out hover:bg-[#2C2B30]">
      <div className="flex items-center justify-center gap-2">
        <Image className="h-6 w-6" src={chipSrc} alt="컬러칩" />
        <span>{title}</span>
      </div>
      <Image className="h-6" src={icCrown} alt="왕관 아이콘" />
    </div>
  );
}
export default SideButton;
