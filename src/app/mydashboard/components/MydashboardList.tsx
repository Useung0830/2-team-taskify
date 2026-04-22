"use Client";

import MyDashboardItemContainer from "./MyDashBoardItemContainer";
import MyDashboardItemContainerAdd from "./MyDashboardItemContainerAdd";
import tag from "../assets/colorchips.svg";
import Image from "next/image";
import { mockdataType } from "./mock";

interface MydashboardListProp {
  data: mockdataType[];
  currentPage: number;
}

export default function MydashboardList({
  data,
  currentPage,
}: MydashboardListProp) {
  return (
    <div className="flex gap-5">
      {/* <MyDashboardItemContainerAdd />
      <MyDashboardItemContainer>
        <Image src={tag} alt="tag" />
        포트폴리오
      </MyDashboardItemContainer> */}

      {currentPage === 0 && <MyDashboardItemContainerAdd />}
      {data.map((item: mockdataType) => (
        <MyDashboardItemContainer>
          <Image src={tag} alt="tag" />
          {item.title}
        </MyDashboardItemContainer>
      ))}
    </div>
  );
}
