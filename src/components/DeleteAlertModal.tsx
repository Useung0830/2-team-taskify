import { cn } from "@/lib/cn";

import { Button } from "./Button";

interface DeleteAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  variant: "mobile" | "desktop";
}

export function DeleteAlertModal({
  isOpen,
  onClose,
  onDelete,
  variant,
}: DeleteAlertModalProps) {
  if (!isOpen) return null;

  const isDesktop = variant === "desktop";

  const handleClose = () => onClose();
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        className={cn(
          "bg-modal-background relative flex flex-col items-center border border-white/10 shadow-2xl",
          isDesktop
            ? "w-150 gap-7.5 rounded-3xl p-[40px_30px_30px]"
            : "w-83.75 gap-5 rounded-[20px] p-[30px_20px_24px]"
        )}
      >
        <button
          onClick={handleClose}
          className={cn(
            "absolute text-gray-400 transition-colors hover:text-white",
            isDesktop ? "top-6 right-6" : "top-4 right-4"
          )}
          aria-label="닫기"
        >
          <svg
            width={isDesktop ? "32" : "24"}
            height={isDesktop ? "32" : "24"}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="12" y2="12"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div
          className={cn(
            "flex flex-col items-center text-center",
            isDesktop ? "w-71.25 gap-3" : "w-57 gap-2"
          )}
        >
          <h2
            className={cn(
              "font-semibold whitespace-nowrap text-gray-200",
              isDesktop ? "text-[24px]" : "text-[18px]"
            )}
          >
            칼럼을 삭제하시겠습니까?
          </h2>
          <p
            className={cn(
              "whitespace-nowrap text-gray-300",
              isDesktop ? "text-[20px]" : "text-[16px]"
            )}
          >
            칼럼 내 모든 카드도 함께 삭제됩니다.
          </p>
        </div>

        <div className={cn("flex w-full", isDesktop ? "gap-5" : "gap-3")}>
          <Button
            colortype="secondary"
            className={cn(
              "hover:bg-black-600! min-w-0! flex-1 bg-gray-900! text-gray-100!",
              isDesktop ? "h-15 text-[18px]" : "h-12.5 text-[16px]"
            )}
            onClick={handleClose}
          >
            취소
          </Button>
          <Button
            className={cn(
              "bg-red! hover:bg-rose! min-w-0! flex-1 text-gray-100!",
              isDesktop ? "h-15 text-[18px]" : "h-12.5 text-[16px]"
            )}
            onClick={handleDelete}
          >
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}
