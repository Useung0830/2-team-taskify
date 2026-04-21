import Image from "next/image";
import { ReactNode } from "react";
import rightbtn from "../assets/rightBtn.svg"


interface MyDashboardCardProps {
  children: ReactNode;
}

export default function MyDashboardItemContainer({ children }: MyDashboardCardProps){

  return(
    <div className= { `flex items-center bg-black-700
    border-2 border-gray-700 rounded-3xl
    w-78.75 h-20 px-5 py-3`} >
      {children}
      <Image src={rightbtn} alt='right' className="ml-auto"/>
    </div>
  )
}