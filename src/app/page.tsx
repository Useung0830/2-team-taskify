"use client";
import { useState } from "react";
import DeleteAlertModal from "@/components/DeleteAlertModal";

export default function ModalTestPage() {
  const [showMobile, setShowMobile] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center gap-10 bg-[#1a1a1a] text-white">
      {/* Modal size | 모바일 */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-gray-400">Modal size | 모바일</p>
        <button
          onClick={() => setShowMobile(true)}
          className="rounded-lg bg-white px-6 py-3 font-bold text-black hover:bg-white"
        >
          Click
        </button>
      </div>

      {/* Modal size | 데스크탑 */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-gray-400">Modal size | 데스크탑</p>
        <button
          onClick={() => setShowDesktop(true)}
          className="rounded-lg bg-white px-6 py-3 font-bold text-black hover:bg-white"
        >
          Click
        </button>
      </div>

      {/* 모바일 버전 모달 */}
      <DeleteAlertModal
        variant="mobile"
        isOpen={showMobile}
        onClose={() => setShowMobile(false)}
        onDelete={() => {
          alert("칼럼과 모든 카드가 성공적으로 삭제되었습니다.");
          setShowMobile(false);
        }}
      />

      {/* 데스크탑 버전 모달 */}
      <DeleteAlertModal
        variant="desktop"
        isOpen={showDesktop}
        onClose={() => setShowDesktop(false)}
        onDelete={() => {
          alert("칼럼과 모든 카드가 성공적으로 삭제되었습니다.");
          setShowDesktop(false);
        }}
      />
    </div>
  );
}
