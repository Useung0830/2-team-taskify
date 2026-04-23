"use client";

import Image from "next/image";

import tag from "../assets/colorchips.svg";

import { MockdataType } from "./mock";
import { MyDashboardItemContainer } from "./MyDashBoardItemContainer";
import { MyDashboardItemContainerAdd } from "./MyDashboardItemContainerAdd";

interface MydashboardListProp {
  data: MockdataType[];
  currentPage: number;
}

export function MydashboardList({ data, currentPage }: MydashboardListProp) {
  return (
    <div className="flex gap-5">
      {/* <MyDashboardItemContainerAdd />
      <MyDashboardItemContainer>
        <Image src={tag} alt="tag" />
        포트폴리오
      </MyDashboardItemContainer> */}

      {currentPage === 0 && <MyDashboardItemContainerAdd />}
      {data.map((item: MockdataType) => (
        <MyDashboardItemContainer key={item.id}>
          <Image src={tag} alt="tag" />
          {item.title}
        </MyDashboardItemContainer>
      ))}
    </div>
  );
}
