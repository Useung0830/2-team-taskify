import MyDashboardItemContainer from "./MyDashBoardItemContainer";
import MyDashboardItemContainerAdd from "./MyDashboardItemContainerAdd";
import tag from "../assets/colorchips.svg";
import Image from "next/image";

export default function MydashboardList() {
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
