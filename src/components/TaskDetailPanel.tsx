import { KebabButton } from "@/components/KebabButton";
import { ModalCloseButton } from "@/components/modal/ModalCloseButton";

export function TaskDetailPanel() {
  return (
    <div className="-mt-7.5 -mr-7.5 -mb-7.5 flex h-220 w-full max-w-57.5 flex-col gap-3 bg-[#2f2f33] px-5 py-5 pt-7.5 max-lg:m-0 max-lg:h-auto max-lg:max-h-none max-lg:w-full max-lg:max-w-none max-lg:bg-transparent max-lg:p-0">
      <div className="flex items-center justify-end gap-5 max-lg:hidden">
        <KebabButton />
        <ModalCloseButton />
      </div>
      <div className="max-lg:border-black-600 flex flex-col gap-2.5 border-b border-[#696773] pb-3 max-lg:w-full max-lg:flex-row max-lg:items-center">
        <span className="text-sm text-gray-300">프로젝트</span>
        <span className="text-basic text-gray-100">
          포트폴리오 / On Progress
        </span>
      </div>
      <div className="max-lg:border-black-600 flex flex-col gap-2.5 border-b border-[#696773] pt-2.5 pb-3 max-lg:flex-row max-lg:items-center">
        <span className="text-sm text-gray-300">담당자</span>
        <span className="text-basic text-gray-100">박민영</span>
      </div>
      <div className="flex flex-col gap-2.5 pt-2.5 max-lg:flex-row max-lg:items-center">
        <span className="text-sm text-gray-300">마감일</span>
        <span className="text-basic text-gray-100">2025년 7월 17일</span>
      </div>
    </div>
  );
}
