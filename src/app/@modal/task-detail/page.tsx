import Badge from "@/components/Badge";
import Image from "next/image";
import ExImage from "@/assets/task-detail-ex.svg";
import CommentForm from "@/components/CommentForm";
import Comment from "@/components/Comment";
import ModalCloseButton from "@/components/modal/ModalCloseButton";
import KebabButton from "@/components/KebabButton";

export default function TaskDetail() {
  return (
    <div className="flex">
      <div className="flex h-full max-h-220 w-full max-w-161 flex-col gap-7.5 pr-7.5 pb-10">
        <div className="border-b-2 border-[#4D4B54] pb-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-gray-100">와이어프레임 만들기</h1>
            <div className="flex gap-2">
              <Badge color="blue">프로젝트</Badge>
              <Badge color="violet">디자인</Badge>
              <Badge color="green">상</Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base text-gray-100">
            먼저 전체 플로우를 개괄적으로 파악하고, 주요 화면 구성을 나열 초기
            와이어프레임은 빠르게 그리고, 이후 단계에서 세부 요소를 보완합니다.
          </p>
          <Image src={ExImage} alt="상세 이미지" />
        </div>
        <div className="flex flex-col gap-4 border-t-2 border-[#4D4B54] pt-7.5">
          <CommentForm />
          <Comment />
        </div>
      </div>
      <div className="-mt-7.5 -mr-7.5 -mb-7.5 flex h-220 w-full max-w-57.5 flex-col gap-3 bg-[#2f2f33] px-5 py-5">
        <div className="flex items-center justify-end gap-5">
          <KebabButton />
          <ModalCloseButton />
        </div>
        <div className="flex flex-col gap-2.5 border-b border-[#696773] pb-3">
          <span className="text-sm text-gray-300">프로젝트</span>
          <span className="text-basic text-gray-100">
            포트폴리오 / On Progress
          </span>
        </div>
        <div className="flex flex-col gap-2.5 border-b border-[#696773] pt-2.5 pb-3">
          <span className="text-sm text-gray-300">담당자</span>
          <span className="text-basic text-gray-100">박민영</span>
        </div>
        <div className="flex flex-col gap-2.5 pt-2.5">
          <span className="text-sm text-gray-300">마감일</span>
          <span className="text-basic text-gray-100">2025년 7월 17일</span>
        </div>
      </div>
    </div>
  );
}
