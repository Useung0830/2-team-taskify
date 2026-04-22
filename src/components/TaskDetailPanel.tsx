import ModalCloseButton from "@/components/modal/ModalCloseButton";
import KebabButton from "@/components/KebabButton";

export function TaskDetailPanel() {
  return (
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
  );
}
