"use client";

import { useEffect } from "react";

interface ToastProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export function Toast({ open, message, onClose }: ToastProps) {
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000); // 자동 시간 설정 3초
    return () => clearTimeout(timer);
  }, [open, onClose]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-9999 -translate-x-1/2 transition-all duration-300 ${
        open
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="rounded-full border border-white/10 bg-gray-900/95 px-5 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-sm md:text-base">
        {message}
      </div>
    </div>
  );
}
