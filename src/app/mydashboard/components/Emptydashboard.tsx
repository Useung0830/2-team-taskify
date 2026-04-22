import Image from "next/image";
import chartIcon from "../assets/chart.svg";
import mailIcon from "../assets/MailIcon.svg";

interface DashboardProps {
  dashtype: "my" | "invite";
}

export function Emptydashboard({ dashtype }: DashboardProps) {
  return (
    <div className="bg-black-800 mt-7 mb-7 flex min-h-65 w-full flex-col items-center justify-center rounded-[30px] border border-gray-700 py-10">
      {dashtype === "my" ? (
        <Image src={chartIcon} alt="chartIcon" />
      ) : (
        <Image src={mailIcon} alt="mailIcon" />
      )}
      <div className="text-lg text-gray-400">
        {dashtype === "my"
          ? "대시보드가 없습니다"
          : "아직 초대받은 대시보드가 없습니다."}
      </div>
      {/* @TODO 버튼은 공통 컴포넌트로 수정 필요 */}
      {dashtype === "my" && (
        <button className="py-1.2 mt-5 h-9 rounded-[100px] border px-4 text-base">
          생성하기
        </button>
      )}
    </div>
  );
}
