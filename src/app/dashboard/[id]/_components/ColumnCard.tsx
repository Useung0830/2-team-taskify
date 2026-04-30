import Image from "next/image";

import { BadgeContainer } from "@/components/Badge/BadgeContainer";
import { Profile } from "@/components/profile/Profile";

interface ColumnCardProps {
  cardTitle: string;
  creator?: string;
  imgSrc?: string;
  tags?: string[];
  descrip?: string;
  onClick?: () => void; // 칼럼 카드 클릭 -> 칼럼 관리 -> 칼럼 수정/삭제 모달을 렌더링 하기 위해 추가
}
export function ColumnCard({
  cardTitle,
  tags,
  creator,
  imgSrc,
  onClick,
}: ColumnCardProps) {
  const handleSetting = () => {
    onClick?.();
  };
  return (
    <div
      onClick={handleSetting}
      className="bg-black-700 flex flex-col gap-5 rounded-[30px] border border-gray-800 p-5 text-gray-100 lg:w-83"
    >
      {imgSrc && <Image className="w-full" src={imgSrc} alt="userAddImg" />}
      <h1 className="text-[18px] font-semibold">{cardTitle}</h1>
      {/* 기능구현할 때는 배지리스트 받아서 처리 */}
      {tags && <BadgeContainer tags={tags} />}
      <div>2025년 7월 20일</div>
      {creator && <Profile name={creator} type="member" />}
    </div>
  );
}
