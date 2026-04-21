export default function InventionHeader(){
  return(
    <div className=" flex justify-between px-7.5 py-3.5 text-[16px] h-11.75" >
      <div className="w-75">이름</div>
      <div className=" flex gap-25">
        <span className=" w-50">초대자</span>
        <span className=" w-31">수락 여부</span>
      </div>
    </div>
  )
}