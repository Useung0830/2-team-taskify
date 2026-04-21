import Image from "next/image";
import addBtn from "../assets/mydashboardAddBtn.svg";

export default function MyDashboardItemContainerAdd(){
  return(
    <div className= { `flex justify-center items-center gap-2.5
    border-2 border-gray-700 border-dashed rounded-3xl
    w-78.75 h-20 px-5 py-3 bg-black-800`} >
      새로운 대시보드
      <Image src={addBtn} alt='add' />
    </div>
  )
}