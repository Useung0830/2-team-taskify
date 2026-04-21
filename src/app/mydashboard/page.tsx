import Image from "next/image";
import MydashboardList from "./components/MydashboardList";
import rightbtn from "./assets/rightBtn.svg"
import leftbtn from "./assets/leftBtn.svg"

export default function MyDashboard() {
  return (
    <div className="bg-background text-gray-100 min-h-screen w-full font-pretendard">
      <h1 className=" text-4xl pr-12.5 pl-12.5 pt-6 pb-4.5 ">홈</h1>
      <div className=" flex flex-col gap-5 text-xl pt-2.5 px-12.5 pb-10 ">
        <div>내 대시보드</div>
        <MydashboardList />
        <div className="flex gap-5 ml-auto text-base">
        1 of 3
        <Image src={leftbtn} alt='left'/>
        <Image src={rightbtn} alt='right'/>
      </div>  
      </div>
      <div className=" text-xl m-12.5 mt-0">
        
        초대 받은 대시보드
        <></>
      </div>
    </div>
  );
}
