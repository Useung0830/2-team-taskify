import { Emptydashboard } from "./components/Emptydashboard";
import { InventionContainer } from "./components/InventionContainer";
import { MydashContainer } from "./components/MydashContainer";

export default function MyDashboard() {
  const hasMydata = false;
  const hasInvitedata = false;

  return (
    <div className="font-pretendard flex flex-col text-gray-100">
      <h1 className="px-5 pt-3.5 pb-2.5 text-4xl font-bold md:px-7.5 md:pt-4.5 lg:px-12.5 lg:pt-6 lg:pb-3.5">
        홈
      </h1>
      <div className="flex flex-col gap-2.5 px-5 pt-2.5 pb-4 text-xl md:px-7.5 md:pb-5 lg:px-12.5 lg:pb-12.5">
        <div className="lg-py-2 py-1 md:text-[18px] lg:text-xl">
          내 대시보드
        </div>
        {/* 서버에서 불러온 데이터가 비어 있으면
        empty 컴포넌트를 리턴하고 비어있지 않으면 데이터를 보여줌 */}
        {hasMydata ? <MydashContainer /> : <Emptydashboard dashtype="my" />}
      </div>
      <div className="flex flex-col gap-2.5 px-5 pt-2.5 pb-4 text-xl md:px-7.5 md:pb-5 lg:px-12.5 lg:pb-12.5">
        <div className="lg-py-2 py-1 md:text-[18px] lg:text-xl">
          초대 받은 대시보드
        </div>
        {hasInvitedata ? (
          <InventionContainer />
        ) : (
          <Emptydashboard dashtype="invite" />
        )}
      </div>
    </div>
  );
}
