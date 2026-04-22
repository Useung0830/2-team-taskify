import CommentForm from "@/components/CommentForm";
import Comment from "@/components/Comment";
import { TaskDetailPanel } from "@/components/TaskDetailPanel";
import { TaskDetailContent } from "@/components/TaskDetailContent";
import { TaskDetailHeader } from "@/components/TaskDetailHeader";

export default function TaskDetail() {
  return (
    <div className="flex">
      <div className="flex h-full max-h-220 w-full max-w-161 flex-col gap-7.5 pr-7.5 pb-10">
        <div className="border-b-2 border-[#4D4B54] pb-6">
          <TaskDetailHeader />
        </div>
        <TaskDetailContent />
        <div className="flex flex-col gap-4 border-t-2 border-[#4D4B54] pt-7.5">
          <CommentForm />
          <Comment />
        </div>
      </div>
      <TaskDetailPanel />
    </div>
  );
}
