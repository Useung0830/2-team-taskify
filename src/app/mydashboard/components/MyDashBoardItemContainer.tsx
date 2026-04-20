import { ReactNode } from "react";

interface MyDashboardCardProps {
  children: ReactNode;
}

export default function MyDashboardItemContainer({children}: MyDashboardCardProps){
  return(
    <div className=" border-2 border-gray-700 border-dsshed">
      {children}
    </div>
  )
}