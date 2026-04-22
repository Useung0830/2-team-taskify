import Image from "next/image";

import ExImage from "@/assets/task-detail-ex.svg";

export function TaskDetailContent() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-base text-gray-100">
        먼저 전체 플로우를 개괄적으로 파악하고, 주요 화면 구성을 나열 초기
        와이어프레임은 빠르게 그리고, 이후 단계에서 세부 요소를 보완합니다.
      </p>
      <Image src={ExImage} alt="상세 이미지" />
    </div>
  );
}
