import ColumnCard from "./ColumnCard";
import ColumnListHeader from "./ColumnListHeader";
import useraddimg from "../assets/userAddImg.png";

export default function ColumnList({ columnTitle }: any) {
  return (
    <div className="flex flex-col gap-5">
      <ColumnListHeader columnTitle={columnTitle} contentCount="3" />
      <ColumnCard cardtitle="기능 설정" creator="김정은" imgsrc={useraddimg} />
      <ColumnCard cardtitle="레퍼런스 찾기" creator="박민영" />
      <ColumnCard cardtitle="GUI 디자인" creator="박민영" imgsrc={useraddimg} />
    </div>
  );
}
