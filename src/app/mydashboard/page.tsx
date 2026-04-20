import Emptydashboard from "./components/Emptydashboard";

export default function MyDashboard() {
  return (
    <div className="bg-background text-gray-100 min-h-screen w-full font-pretendard">
      <h1 className=" text-4xl pr-12.5 pl-12.5 pt-6 pb-4.5 ">홈</h1>
      <div className=" text-xl m-12.5 mt-0">
        내 대시보드
        {/* 서버에서 불러온 데이터가 비어 있으면
        empty 컴포넌트를 리턴하고 비어있지 않으면 데이터를 보여줌 */}
        <Emptydashboard dashtype='my' />
      </div>
      <div className=" text-xl m-12.5 mt-0">
        초대 받은 대시보드
        <Emptydashboard dashtype='invite' />
      </div>
    </div>
  );
}
