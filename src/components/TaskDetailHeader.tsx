import Badge from "@/components/Badge";

export function TaskDetailHeader() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl text-gray-100">와이어프레임 만들기</h1>
      <div className="flex gap-2">
        <Badge color="blue">프로젝트</Badge>
        <Badge color="violet">디자인</Badge>
        <Badge color="green">상</Badge>
      </div>
    </div>
  );
}
