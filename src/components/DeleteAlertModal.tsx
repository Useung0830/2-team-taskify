import Button from "./Button";
import { cn } from "@/util/cn";

interface DeleteAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  variant: "mobile" | "desktop";
}

export default function DeleteAlertModal({
  isOpen,
  onClose,
  onDelete,
  variant,
}: DeleteAlertModalProps) {
  if (!isOpen) return null;

  const isDesktop = variant === "desktop";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        className={cn(
          "bg-modal-background relative flex flex-col items-center border border-white/10 shadow-2xl",
          isDesktop
            ? "w-[600px] gap-[30px] rounded-[24px] p-[40px_30px_30px]"
            : "w-[335px] gap-[20px] rounded-[20px] p-[30px_20px_24px]"
        )}
      >
        <button
          onClick={onClose}
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

        {/* 텍스트 영역 */}
        <div
          className={cn(
            "flex flex-col items-center text-center",
            isDesktop ? "w-[285px] gap-[12px]" : "w-[228px] gap-[8px]"
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

        {/* 확인 | 취소 버튼 */}
        <div
          className={cn("flex w-full", isDesktop ? "gap-[20px]" : "gap-[12px]")}
        >
          <Button
            colortype="secondary"
            className={cn(
              "!min-w-0 flex-1",
              isDesktop ? "h-[60px]" : "h-[50px]",
              isDesktop ? "text-[18px]" : "text-[16px]"
            )}
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            colortype="primary"
            className={cn(
              "bg-red !min-w-0 flex-1",
              isDesktop ? "h-[60px]" : "h-[50px]",
              isDesktop ? "text-[18px]" : "text-[16px]"
            )}
            onClick={onDelete}
          >
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}
