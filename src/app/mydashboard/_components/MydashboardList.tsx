import Image from "next/image";

import tag from "@/assets/mydashboard/colorchips.svg";

import { MyDashboardItemContainer } from "./MyDashBoardItemContainer";
import { MyDashboardItemContainerAdd } from "./MyDashboardItemContainerAdd";

// interface Assingee {
//   profileImageUrl: string;
//   nickname: string;
//   id: number;
// }
interface DashboardCard {
  id: number;
  title: string;
  // description: string;
  // tags: string[];
  // dueDate: string;
  // assignee: Assingee;
  // imageUrl: string;
  // teamId: string;
  // columnId: number;
  // createdAt: string;
  // updatedAt: string;
}

interface MydashboardListProp {
  data: DashboardCard[];
  currentPage: number;
}

export function MydashboardList({ data, currentPage }: MydashboardListProp) {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {currentPage === 1 && <MyDashboardItemContainerAdd />}
      {data.map((item: DashboardCard) => (
        <MyDashboardItemContainer key={item.id} dashid={item.id}>
          {/* @TODO Hash 컴포넌트로 교체 */}
          <div className="flex gap-1">
            <Image src={tag} alt="tag" />
            {item.title}
          </div>
        </MyDashboardItemContainer>
      ))}
    </div>
  );
}
