"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

import { useClickOutside } from "@/hooks/useClickOutside";

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const close = () => {
    router.back();
  };
  useClickOutside(containerRef, close);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        ref={containerRef}
        className="bg-modal-background border-stroke relative max-w-218.5 min-w-74 overflow-hidden rounded-3xl border p-7.5 shadow-2xl"
      >
        {children}
      </div>
    </div>
  );
}
