import { Emptydashboard } from "./components/Emptydashboard";

export default function MyDashboard() {
  return (
    <div className="font-pretendard min-h-screen w-full text-gray-100">
      <h1 className="pt-6 pr-12.5 pb-4.5 pl-12.5 text-4xl">홈</h1>
      <div className="m-12.5 mt-0 text-xl">
        내 대시보드
        {/* 서버에서 불러온 데이터가 비어 있으면
        empty 컴포넌트를 리턴하고 비어있지 않으면 데이터를 보여줌 */}
        <Emptydashboard dashtype="my" />
      </div>
      <div className="m-12.5 mt-0 text-xl">
        초대 받은 대시보드
        <Emptydashboard dashtype="invite" />
      </div>
    </div>
  );
}
