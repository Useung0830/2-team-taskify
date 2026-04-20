import Mydashboard from "./components/Mydashboard";

export default function MyDashboard() {
  return (
    <div className="bg-background text-gray-100 min-h-screen w-full font-pretendard">
      <h1 className=" text-4xl pr-12.5 pl-12.5 pt-6 pb-4.5 ">홈</h1>
      <div className=" text-xl m-12.5 mt-0">
        <div>내 대시보드</div>
        <Mydashboard />
        
      </div>
      <div className=" text-xl m-12.5 mt-0">
        초대 받은 대시보드
        <></>
      </div>
    </div>
  );
}
