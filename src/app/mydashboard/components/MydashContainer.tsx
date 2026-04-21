import MydashboardList from "./MydashboardList";
import rightbtn from "../assets/rightBtn.svg";
import leftbtn from "../assets/leftBtn.svg";
import Image from "next/image";

export default function MydashContainer() {
  return (
    <div className="flex flex-col py-2.5">
      <MydashboardList />
      <div className="ml-auto flex gap-5 pt-5">
        <div> 1 of 3</div>
        <Image src={leftbtn} alt="left" />
        <Image src={rightbtn} alt="right" />
      </div>
    </div>
  );
}
