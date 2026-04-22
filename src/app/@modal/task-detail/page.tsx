import { Comment } from "@/components/Comment";
import { CommentForm } from "@/components/CommentForm";
import { TaskDetailContent } from "@/components/TaskDetailContent";
import { TaskDetailHeader } from "@/components/TaskDetailHeader";
import { TaskDetailPanel } from "@/components/TaskDetailPanel";

export default function TaskDetail() {
  return (
    <div className="max-md:bg-modal-background flex h-full max-lg:flex-col max-lg:gap-7.5 max-lg:p-0 max-md:fixed max-md:top-0 max-md:left-0 max-md:z-55 max-md:mt-12.5 max-md:w-full max-md:gap-5 max-md:p-7.5 max-md:pt-6">
      <div className="flex max-h-220 max-w-161 flex-col gap-7.5 pr-7.5 pb-10 max-lg:contents">
        <div className="border-b border-[#4D4B54] pb-6">
          <TaskDetailHeader />
        </div>
        <TaskDetailContent />
        <div className="flex flex-col gap-4 border-t-2 border-[#4D4B54] pt-7.5 max-lg:order-1">
          <CommentForm />
          <Comment />
        </div>
      </div>
      <TaskDetailPanel />
    </div>
  );
}
