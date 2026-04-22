import Image from "next/image";
import chartIcon from "../assets/chart.svg"
import mailIcon from "../assets/MailIcon.svg";

interface DashboardProps {
  dashtype: 'my' | 'invite';
}

export default function Emptydashboard({ dashtype }: DashboardProps){
  return(
    <div className =" flex flex-col justify-center items-center
    w-full min-h-65 border-gray-700 bg-black-800
    rounded-[30px] border py-10 mt-7 mb-7">
      {dashtype==='my'
      ?<Image src={chartIcon} alt="chartIcon" />
      : <Image src={mailIcon} alt="mailIcon" />}
      <div className=" text-lg text-gray-400">
        {dashtype==='my'? "대시보드가 없습니다": "아직 초대받은 대시보드가 없습니다."}
      </div>
      {/* @TODO 버튼은 공통 컴포넌트로 수정 필요 */}
      {dashtype==='my' && <button className=" h-9 py-1.2 px-4 rounded-[100px] text-base border mt-5" >생성하기</button> }
    </div>
  )
}