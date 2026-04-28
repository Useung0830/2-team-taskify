import { DashboardColorChoiceList } from "@/components/DashboardColorChoiceList";
import { ModalHeader } from "@/components/modal/ModalHeader";

export default function NewDashboard() {
  return (
    <div className="border-gray-stroke flex flex-col gap-5 rounded-3xl">
      <ModalHeader>새 대시보드 생성</ModalHeader>
      <input
        className="bg-black-800 h-13.5 rounded-md border border-gray-700 px-5 py-1.5 text-gray-400"
        placeholder="새로운 대시보드"
      />
      <DashboardColorChoiceList />
      <div className="flex gap-5">
        <button className="h-15 w-full rounded-full bg-gray-900 px-7.5 py-1.5">
          취소
        </button>
        <button className="h-15 w-full rounded-full bg-green-500 px-7.5 py-1.5">
          생성
        </button>
      </div>
    </div>
  );
}
