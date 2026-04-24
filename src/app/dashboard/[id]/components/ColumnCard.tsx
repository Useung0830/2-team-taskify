import Image, { StaticImageData } from "next/image";

import { Badge } from "@/components/Badge";

import { Profile } from "./Profile";

interface ColumnCardProps {
  cardTitle: string;
  creator: string;
  imgSrc?: StaticImageData;
}
export function ColumnCard({
  cardTitle: cardTitle,
  creator,
  imgSrc: imgSrc,
}: ColumnCardProps) {
  return (
    <div className="bg-black-700 flex flex-col gap-5 rounded-[30px] border border-gray-800 p-5 text-gray-100 lg:w-90">
      {imgSrc && <Image className="w-full" src={imgSrc} alt="userAddImg" />}
      <h1 className="text-[18px] font-semibold">{cardTitle}</h1>
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
