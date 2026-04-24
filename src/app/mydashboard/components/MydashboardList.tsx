import Image from "next/image";

import tag from "../assets/colorchips.svg";

import { MyDashboardItemContainer } from "./MyDashBoardItemContainer";
import { MyDashboardItemContainerAdd } from "./MyDashboardItemContainerAdd";

export function MydashboardList() {
  return (
    <div className="flex gap-5">
      <MyDashboardItemContainerAdd />
      <MyDashboardItemContainer>
        <Image src={tag} alt="tag" />
        포트폴리오
      </MyDashboardItemContainer>
      <MyDashboardItemContainer>
        <Image src={tag} alt="tag" />
        포트폴리오
      </MyDashboardItemContainer>
      <MyDashboardItemContainer>
        <Image src={tag} alt="tag" />
        포트폴리오
      </MyDashboardItemContainer>
    </div>
  );
}
