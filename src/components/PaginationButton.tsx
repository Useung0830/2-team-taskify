import Image from "next/image";

import leftbtn from "@/assets/mydashboard/ic_left_arrow.svg";
import rightbtn from "@/assets/mydashboard/ic_right_arrow.svg";

interface PaginationButtonProp {
  current: number;
  total: number;
  handleClickPrev: () => void;
  handleClickNext: () => void;
}

export function PaginationButton({
  current,
  total,
  handleClickPrev,
  handleClickNext,
}: PaginationButtonProp) {
  return (
    <div className="ml-auto flex gap-5 pt-5">
      <div>
        {" "}
        {current + 1} of {total}
      </div>
      <button
        className="disabled:opacity-30"
        onClick={handleClickPrev}
        disabled={current === 0}
      >
        <Image src={leftbtn} alt="left" className="cursor-pointer" />
      </button>
      <button
        className="disabled:opacity-30"
        onClick={handleClickNext}
        disabled={current === total - 1}
      >
        <Image src={rightbtn} alt="right" className="cursor-pointer" />
      </button>
    </div>
  );
}
