import Profile from "./Profile";

export default function InventionRow(){
  return(
    <div className=" flex justify-between items-center px-7.5 py-3.5 text-[18px] h-16" >
      <div className="w-75">프로덕트 디자인</div>
      <div className=" flex items-center gap-25">
        <span className=" w-50">
          {/* 임시 컴포넌트 @TODO 교체 필요*/}
          <Profile name='김정은' />
        </span>
        <div className=' flex gap-3'>
          <button className="bg-gray-900 px-3.5 py-1.5 rounded-[100px]">거절</button>
          <button className=" bg-green-500 px-3.5 py-1.5 rounded-[100px]">수락</button>
        </div>
      </div>
    </div>
  )
}