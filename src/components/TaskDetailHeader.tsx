import { Badge } from "@/components/Badge";

import { KebabButton } from "./KebabButton";
import { ModalCloseButton } from "./modal/ModalCloseButton";

export function TaskDetailHeader() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center max-lg:justify-between">
        <h1 className="text-2xl text-gray-100">와이어프레임 만들기</h1>
        <div className="hidden gap-2 max-lg:flex">
          <KebabButton />
          <ModalCloseButton />
        </div>
      </div>
      <div className="flex gap-2">
        <Badge color="blue">프로젝트</Badge>
        <Badge color="violet">디자인</Badge>
        <Badge color="green">상</Badge>
      </div>
    </div>
  );
}
