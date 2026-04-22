import { Emptydashboard } from "./components/Emptydashboard";
import InventionContainer from "./components/InventionContainer";
import MydashContainer from "./components/MydashContainer";

export default function MyDashboard() {
  const mydata = true;
  const invitedata = true;

  return (
    <div className="font-pretendard flex min-h-screen w-full flex-col text-gray-100">
      <h1 className="px-12.5 pt-6 pb-3.5 text-4xl font-bold">홈</h1>
      <div className="flex flex-col gap-5 px-12.5 pb-12.5 text-xl">
        <div className="py-1">내 대시보드</div>
        {/* 서버에서 불러온 데이터가 비어 있으면
        empty 컴포넌트를 리턴하고 비어있지 않으면 데이터를 보여줌 */}
        {mydata ? <MydashContainer /> : <Emptydashboard dashtype="my" />}
      </div>
      <div className="flex flex-col gap-5 px-12.5 pb-12.5 text-xl">
        <div className="py-1">초대 받은 대시보드</div>
        {invitedata ? (
          <InventionContainer />
        ) : (
          <Emptydashboard dashtype="invite" />
        )}
      </div>
    </div>
  );
}
