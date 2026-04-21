import Badge from "@/components/Badge";
import Profile from "./Profile";
import Image, { StaticImageData } from "next/image";

interface ColumnCardProps {
  cardtitle: string;
  creator: string;
  imgsrc?: StaticImageData;
}
export default function ColumnCard({
  cardtitle,
  creator,
  imgsrc,
}: ColumnCardProps) {
  return (
    <div className="bg-black-700 flex w-full flex-col gap-5 rounded-[30px] border border-gray-800 p-5 text-gray-100">
      {imgsrc && <Image className="w-full" src={imgsrc} alt="userAddImg" />}
      <h1 className="w-91 text-[18px] font-semibold">{cardtitle}</h1>
      <div className="flex gap-1.5">
        {/* 기능구현할 때는 배지리스트 받아서 처리 */}
        <Badge color="blue">프로젝트</Badge>
        <Badge color="green">상</Badge>
      </div>
      <div>2025년 7월 20일</div>
      <Profile name={creator} />
    </div>
  );
}
